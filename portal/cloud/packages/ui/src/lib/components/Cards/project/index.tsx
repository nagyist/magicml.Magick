'use client'

import { Fragment, FunctionComponent, ReactNode, useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { api } from '@magickml/portal-server-provider'
import clsx from 'clsx'
import { Dialog, Menu, Transition } from '@headlessui/react'

type ProjectCardProps = {
  id: string
  name: string
  image: string
  description: string
}
export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  id,
  name = 'Project',
  image = '/images/project.png',
  description = 'Discord brain',
}) => {
  const theme = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      key={id}
      layout
      className="border border-transparent hover:border-secondary-highlight relative rounded-[10px] card-shadow text-[#18181d] color-transition dark:text-white  bg-[#f0f5f6] dark:bg-[#262730] w-[200px] h-[220px] flex flex-col px-2.5 pt-1 pb-2.5
     box-border items-start justify-between text-center text-sm font-sans"
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-1 text-left font-berkley-mono text-[10px]">
        <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
          <Image
            className="w-[15px] h-[15px] overflow-hidden shrink-0 object-cover"
            alt=""
            src={
              theme.theme === 'light'
                ? '/images/icons/project-dark.svg'
                : '/images/icons/project-light.svg'
            }
            width={15}
            height={15}
          />
          <div className="">PROJECT</div>
        </div>
        <Link href={`/projects/${id}`}>
          <Image
            className="self-stretch relative rounded-[10px] max-w-full overflow-hidden h-[133px] flex-shrink-0 object-cover"
            alt=""
            src={image}
            width={200}
            height={133}
          />
        </Link>
      </div>
      <Link
        href={`/projects/${id}`}
        className="relative self-stretch font-medium hover:link"
      >
        {name}
      </Link>
      <div className="flex flex-row items-center self-stretch justify-between text-left">
        <i className="relative overflow-hidden font-thin text-ellipsis">
          {description}
        </i>
        <button>
          <ProjectDropdown projectId={id} projectName={name} />
        </button>
      </div>
    </motion.div>
  )
}

type ProjectDropdownProps = {
  projectId?: string
  projectName?: string
}

const ProjectDropdown: React.FunctionComponent<ProjectDropdownProps> = ({
  projectId,
  projectName,
}) => {
  const utils = api.useContext()
  const [rename, setRename] = useState('')
  const [renameModalOpen, setRenameModalOpen] = useState(false)
  const [, setDeleteName] = useState('')
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [disableConfirmDelete, setDisableConfirmDelete] = useState(true)

  const { mutateAsync: renameProject } = api.projects.updateProject.useMutation(
    {
      onSuccess: async () => {
        await utils.projects.invalidate()
        toast.success('Project renamed')
        handleCancel()
      },
      onError: e => {
        toast.error(e.message)
        handleCancel()
      },
    }
  )

  const { mutateAsync: deleteProject } = api.projects.deleteProject.useMutation(
    {
      onSuccess: async () => {
        await utils.projects.invalidate()
        toast.success('Project deleted')
        handleCancel()
      },
      onError: e => {
        toast.error(e.message)
        handleCancel()
      },
    }
  )

  const handleRename = async () => {
    if (rename.length < 3) {
      toast.error('Name must be at least 3 characters')
      return
    } else
      await renameProject({
        projectId: projectId ?? '',
        name: rename,
      })
  }

  const handleDelete = async () => {
    await deleteProject({
      projectId: projectId ?? '',
    })
    setDisableConfirmDelete(true)
    setRenameModalOpen(false)
    setDeleteModalOpen(false)
    setRename('')
    setDeleteName('')
  }

  const handleCancel = () => {
    setRenameModalOpen(false)
    setDeleteModalOpen(false)
    setRename('')
    setDeleteName('')
    setDisableConfirmDelete(true)
  }

  const handleOnchangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === projectName) setDisableConfirmDelete(false)
    else setDisableConfirmDelete(true)
    setDeleteName(e.target.value)
  }

  const menuItems = [
    {
      name: 'Open in AIDE',
      type: 'link',
      href: `/projects/${projectId}`,
      action: () => console.log('open in aide'),
    },
    {
      name: 'Rename',
      action: () => setRenameModalOpen(true),
      type: 'button',
    },
    {
      name: 'Delete',
      action: () => setDeleteModalOpen(true),
      type: 'button',
    },
  ]

  return (
    <>
      <MultiModal
        title="Rename Project"
        isOpen={renameModalOpen}
        onCancel={handleCancel}
        onSubmit={handleRename}
        submitText="Rename"
        content={
          <input
            className="w-full p-2 magick-input placeholder:opacity-80"
            placeholder="Enter new project name"
            onChange={e => setRename(e.target.value)}
          />
        }
      />
      <MultiModal
        title="Delete Project"
        isOpen={deleteModalOpen}
        onCancel={handleCancel}
        onSubmit={handleDelete}
        isSubmitDisabled={disableConfirmDelete}
        submitText="Delete"
        content={
          <div className="flex flex-col gap-2">
            <div className="text-red-500">
              Are you sure you want to delete this project?
            </div>
            <div className="text-red-500">
              This action cannot be undone and all agents in this project will
              be deleted.
            </div>
            <input
              className="w-full p-2 magick-input placeholder:opacity-80"
              placeholder="Enter project name to confirm"
              onChange={handleOnchangeDelete}
            />
          </div>
        }
      />
      <Menu
        as="div"
        className="relative inline-block text-left text-black dark:text-white color-transition"
      >
        <div>
          <Menu.Button
            as={EllipsisVerticalIcon}
            className="relative w-[16px] h-[14.97px] overflow-hidden flex-shrink-0 object-cover"
          />
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute text-white color-transition font-berkley-mono rounded-sm right-0 z-10 mt-2 w-[160px] divide-y divide-[#181818] bg-secondary-highlight dark:bg-[#2B2B30] shadow-lg origin-top-right border border-[#181818] focus:outline-none">
            {menuItems.map(item => (
              <Menu.Item key={item.name}>
                {({ active }) =>
                  item.type === 'link' ? (
                    <Link
                      href={item.href ?? '#'}
                      className={clsx(
                        active ? 'bg-[#3C3F41]' : '',
                        'block px-4 py-2 text-sm w-full hover:bg-[#3C3F41] color-transition'
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action ?? (() => console.log('no action'))}
                      className={clsx(
                        active ? 'bg-[#3C3F41]' : '',
                        'block px-4 py-2 text-sm w-full hover:bg-[#3C3F41] color-transition'
                      )}
                    >
                      {item.name}
                    </button>
                  )
                }
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

type MultiModalProps = {
  title: string
  onCancel: () => void
  onSubmit: () => void
  cancelText?: string
  submitText?: string
  content: ReactNode
  isOpen: boolean
  isLoading?: boolean
  isSubmitDisabled?: boolean
}

const MultiModal: React.FC<MultiModalProps> = ({
  title,
  onCancel,
  onSubmit,
  cancelText = 'Cancel',
  submitText = 'Submit',
  content,
  isOpen,
  isLoading = false,
  isSubmitDisabled = false,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onCancel}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform rounded-sm shadow-xl dark:bg-[#262626] bg-[#DCE8ED] ring-1 ring-secondary-main">
            <Dialog.Title
              as="h3"
              className="text-2xl font-bold leading-6 text-center text-semibold text-secondary-highlight"
            >
              {title}
            </Dialog.Title>
            <div className="mt-4">{content}</div>
            <div className="flex flex-row justify-between mt-5">
              <button
                type="button"
                className="px-8 font-bold text-black font-berkley-mono hover:bg-secondary-highlight text-md btn bg-secondary-highlight rounded-2xl"
                onClick={onCancel}
              >
                {cancelText}
              </button>
              <button
                disabled={isSubmitDisabled}
                className="px-8 font-bold text-black font-berkley-mono text-md btn bg-secondary-gradient rounded-2xl disabled:text-black disabled:opacity-50"
                onClick={onSubmit}
              >
                {submitText}
                {isLoading && (
                  <span className="text-white loading loading-spinner"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
