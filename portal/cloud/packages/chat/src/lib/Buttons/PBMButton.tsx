import Image from "next/legacy/image"
import Link from 'next/link'

const PBMButton = () => {
  return (
    <Link
      href="https://site.magickml.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden 2xl:inline-flex absolute bottom-2 right-4  items-center gap-x-2"
    >
      powered by
      <Image
        src="/images/magick-logo-blue.png"
        alt="Magick Logo"
        width={140}
        height={70}
      />
    </Link>
  )
}

export default PBMButton
