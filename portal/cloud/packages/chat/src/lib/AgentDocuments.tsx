import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { api } from '@magickml/portal-server-provider'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useAtomValue } from 'jotai'
import { workspaceAtom } from '@magickml/portal-state'
import { useCreateDocument } from '@magickml/portal-hooks'
import { useDropzone, Accept } from 'react-dropzone'
import TablePagination from './TablePagination'
import {
  getDocumentTypes,
  getEmbeddingModels,
} from '@magickml/portal-utils-shared'

const columnHelper = createColumnHelper<Document>()

const getColumns = (documentTypes: string[], updateDocument: any) => {
  return [
    columnHelper.accessor('type', {
      header: () => <span>Type</span>,
      cell: info => {
        return (
          <select
            className="w-32 dark:bg-sidebar-main white dark:text-white border rounded-md shadow-sm p-2 focus:ring-1 focus:outline-none transition"
            value={info.getValue()}
            onChange={e => {
              const { projectId, id } = info.row.original

              const data = {
                projectId,
                documentId: id,
                updateData: {
                  type: e.target.value,
                },
              }

              if (e.target.value !== info.getValue()) updateDocument(data)
            }}
          >
            {documentTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        )
      },
      footer: info => info.column.id,
    }),
    columnHelper.accessor('filename', {
      header: () => 'Filename',
      cell: info => (
        <span className="line-clamp-2" data-test="DocumentContent">
          {(info.row.original.metadata?.fileName as string) || 'N/A'}
        </span>
      ),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('date', {
      header: () => <span>Date</span>,
      cell: info => new Date(info.getValue()).toLocaleDateString(),
      footer: info => info.column.id,
    }),
  ]
}

type AgentDocumentsProps = {
  projectId: string | null | undefined
  agent: any
}

const AgentDocuments = ({ projectId, agent }: AgentDocumentsProps) => {
  const utils = api.useContext()
  const workspace = useAtomValue(workspaceAtom)
  const [documentTypes, setDocumentTypes] = useState<string[]>([])
  const [embeddingModels, setEmbeddingModels] = useState<string[]>([
    'embedding-gecko-001',
  ])

  const { data: documents } = api.documents.getDocuments.useQuery(
    {
      // ignoring this because we only enable the query of the project ID is there
      // @ts-ignore
      projectId: projectId,
      workspaceId: workspace?.id,
    },
    {
      enabled:
        workspace?.id.length > 0 && !!projectId && documentTypes.length > 0,
    }
  )

  const { mutateAsync: updateDocument } =
    api.documents.updateDocument.useMutation({
      onSuccess: async () => {
        await utils.documents.invalidate()
        toast.success('Document updated')
      },
      onError: e => {
        toast.error(e.message)
      },
    })

  useEffect(() => {
    if (!agent) return
    // Note: rootSpell is deprecated
    const nodes = agent.graph.nodes

    const types = getDocumentTypes(nodes)

    setDocumentTypes(types)
  }, [agent])

  useEffect(() => {
    if (!agent) return
    const nodes = agent.rootSpell.graph.nodes

    const models = getEmbeddingModels(nodes)

    if (models.length === 0) return

    setEmbeddingModels(models)
  }, [agent])

  const table = useReactTable({
    data: documents || [],
    columns: getColumns(documentTypes, updateDocument) as any,
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  }) as ReturnType<typeof useReactTable>

  const { mutateAsync: createDocuments, isLoading: createDocumentLoading } =
    useCreateDocument()

  const handleFileUpload = async (files: File[], type?: string) => {
    const file = files.length > 0 ? files[0] : null
    if (!file || !projectId) return

    try {
      await createDocuments({
        files,
        projectId: projectId,
        type: type || documentTypes[0],
        model: selectedModel || embeddingModels[0],
      })
      await utils.documents.invalidate()
    } catch (error: any) {
      toast.error('Error uploading documents', error)
    }
  }

  const [selectedType, setSelectedType] = useState<string>(documentTypes[0])
  const [selectedModel, setSelectedModel] = useState<string>(embeddingModels[0])

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-8 gap-y-4 relative">
        {createDocumentLoading && (
          <span className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 loading-lg loading loading-spinner top-[1.5%] left-1/2" />
        )}

        <div className="flex-1">
          <p>
            Select the knowledge type available in the agents memory to upload a
            file into.
          </p>
        </div>
        <div className="flex max-w-[300px]">
          <select
            className="flex-1 w-32 dark:bg-sidebar-main white dark:text-white border rounded-md shadow-sm p-2 focus:ring-1 focus:outline-none transition"
            value={selectedType}
            onChange={e => {
              setSelectedType(e.target.value)
            }}
          >
            {documentTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <p>Select the model you want to use to generate your embeddings.</p>
        </div>
        <div className="flex max-w-[300px]">
          <select
            className="flex-1 w-32 dark:bg-sidebar-main white dark:text-white border rounded-md shadow-sm p-2 focus:ring-1 focus:outline-none transition"
            value={selectedModel}
            onChange={e => {
              setSelectedModel(e.target.value)
            }}
          >
            {embeddingModels.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <FileDropper
          handleFileUpload={handleFileUpload}
          type={selectedType}
          accept={{
            document: [
              '.eml',
              '.html',
              '.json',
              '.md',
              '.msg',
              '.rst',
              '.rtf',
              '.txt',
              '.xml',
              '.jpeg',
              '.jpg',
              '.png',
              '.csv',
              '.doc',
              '.docx',
              '.epub',
              '.odt',
              '.pdf',
              '.ppt',
              '.pptx',
              '.tsv',
              '.xlsx',
            ],
          }}
        />

        <div className="pt-4">
          {/* Document Section Header */}
          <div className="mx-auto">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-black dark:text-white">
                  Knowledge
                </h1>
                <p className="mt-2 text-sm text-black dark:text-white">
                  A list of all your agents learned knowledge so far. More
                  document options coming soon.
                </p>
              </div>
            </div>
          </div>
          <div className="flow-root mt-8 overflow-x-auto overflow-y-hidden border border-secondary-dark">
            <div className="mx-auto">
              <table className="w-full text-left">
                <thead className="bg-white dark:bg-sidebar-main">
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th
                          key={header.id}
                          className="px-3 py-3.5 text-left text-sm font-semibold dark:text-white text-black"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                      {/* <th className="px-3 py-3.5 text-left text-sm font-semibold dark:text-white text-black">
                        Delete
                      </th> */}
                    </tr>
                  ))}
                </thead>
                {documents && (
                  <tbody className="bg-[#DCE8ED] dark:bg-card-main">
                    {documents?.length > 0 &&
                      table.getRowModel().rows.map((row, index) => (
                        <tr
                          key={row.id}
                          className="border-b border-b-secondary-main"
                        >
                          {row.getVisibleCells().map(cell => (
                            <td
                              key={cell.id}
                              className="px-3 py-4 text-sm text-black dark:text-white"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                          {/* <td className="px-3 py-4 text-sm text-black dark:text-white">
                            <button
                              // onClick={() => handleDelete(index)}
                              className="text-red-600 hover:text-red-800"
                            >
                              Delete
                            </button>
                          </td> */}
                        </tr>
                      ))}
                  </tbody>
                )}
              </table>
              {documents && documents?.length > 0 && (
                <TablePagination table={table} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type Document = {
  id: string
  date: string
  type: string
  filename?: string
  metadata?: Record<string, unknown>
  projectId: string
  embedding: string
}

type FileDropperProps = {
  handleFileUpload: (files: File[], type?: string) => void
  type?: string
  accept: Accept
}

const FileDropper: React.FC<FileDropperProps> = ({
  handleFileUpload,
  type,
  accept,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      handleFileUpload(acceptedFiles, type)
    },
    [handleFileUpload]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  })
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-sm mb-5">
        Please be aware that larger documents may take some time to process and
        may appear to fail. We are working on a queue system to improve this.
      </p>
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 rounded-lg -pointer color-transition border-secondary-da hover:border-secondary-highlight dark:bg-card-main text-center px-8"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-secondary-highlight"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-black dark:text-white">
            {isDragActive ? (
              <span>Release to drop the files here</span>
            ) : (
              <>
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </>
            )}
          </p>
          <p className="text-xs text-secondary-highlight">
            .eml, .html, .json, .md, .msg, .rst, .rtf, .txt, .xml, .jpeg, .jpg,
            .png, .csv, .doc, .docx, .epub, .odt, .pdf, .ppt, .pptx, .tsv, .xlsx
          </p>
        </div>
      </div>
    </div>
  )
}

export default AgentDocuments
