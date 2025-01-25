import { Button, Input, agentInputStyles,MagickDialog } from '@magickml/client-ui'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FiShare } from 'react-icons/fi'
import Image from 'next/legacy/image'
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'

type Props = {
  agentId: string
}

const AgentChatShareButton: React.FC<Props> = ({
  agentId,
}: {
  agentId: string
}) => {
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false)
  const agentUrl = `${process.env.NEXT_PUBLIC_APP_URL}/agents/${agentId}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_APP_URL}/agents/${agentId}`
    )
    toast.success('Link copied to clipboard')
  }

  const handleShare = (platformShareLink: string) => {
    window.open(platformShareLink, '_blank')
  }

  const socialMediaPlatform = [
    {
      name: 'facebook',
      shareLink: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        agentUrl
      )}`,
      logo: '/images/logos/facebook.svg',
    },
    {
      name: 'twitter',
      shareLink: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        agentUrl
      )}`,
      logo: '/images/logos/twitter.svg',
    },
    {
      name: 'linkedIn',
      shareLink: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        agentUrl
      )}`,
      logo: '/images/logos/linkedIn.svg',
    },
    {
      name: 'whatsapp',
      shareLink: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        agentUrl
      )}`,
      logo: '/images/logos/whatsapp.svg',
    },
    {
      name: 'telegram',
      shareLink: `https://t.me/share/url?url=${encodeURIComponent(agentUrl)}`,
      logo: '/images/logos/telegram.svg',
    },
  ]

  return (
    <>
      <Button onClick={() => setShareModalOpen(true)} variant="agent" size="sm">
        <FiShare className="text-lg" />
      </Button>
      <MagickDialog
        title="Share this link"
        open={shareModalOpen}
        setOpen={setShareModalOpen}
        submitButton={false}
        logo={false}
      >
        <p className="text-sm font-sans">Share this link via</p>
        <div className="flex justify-between w-full cursor-pointer">
          {socialMediaPlatform.map(media => (
            <div
              onClick={() => handleShare(media.shareLink)}
              key={media.name}
              className="flex items-center content-center justify-center w-10 h-10 bg-white rounded-full"
            >
              <Image height={27} width={27} src={media.logo} alt={media.name} />
            </div>
          ))}
        </div>
        <p className="text-sm font-sans">Or copy link</p>
        <div className="flex justify-between w-full">
          <Input
            type="text"
            value={`${process.env.NEXT_PUBLIC_APP_URL}/agents/${agentId}`}
            disabled
            className={agentInputStyles + ' w-56'}
          />
          <Button
            className=" text-[#0b0d0e] font-bold w-10 px-0"
            onClick={copyToClipboard}
          >
            <DocumentDuplicateIcon height={25} width={25} />
          </Button>
        </div>
      </MagickDialog>
    </>
  )
}

export default AgentChatShareButton
