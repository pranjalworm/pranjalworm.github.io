// File to define image and icon loaders


export const imageLoader = ({ src, width, quality }:
  { src: string, width: number, quality?: number }) => {

  const baseUrl = `${process.env.BASE_URL}/images`

  return `${baseUrl}/${src}`

}

export const iconLoader = ({ src, width, quality }:
  { src: string, width: number, quality?: number }) => {

  const baseUrl = `${process.env.BASE_URL}/icons`

  return `${baseUrl}/${src}`

}
