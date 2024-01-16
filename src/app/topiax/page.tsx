import Image from 'next/image'
import gif from '@/images/topiax.gif'

export default function GifPreview() {
  return (
    <div>
      <Image
        src={gif}
        alt="Gif description"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
