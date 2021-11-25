import { isProduction } from "../utils"


export const imageLoader = ({ src, width, quality }:
  { src: string, width: number, quality?: number }) => {

  return `${getBaseUrl()}/images/${src}`

}


export const iconLoader = ({ src, width, quality }:
  { src: string, width: number, quality?: number }) => {

  return `${getBaseUrl()}/icons/${src}`

}


const getBaseUrl = () => {

  return isProduction() ? `${process.env.BASE_URL}/` : 'http://localhost:3000'
}
