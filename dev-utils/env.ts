export const getEnv = () => {

  return process.env.NODE_ENV
}

export const isProduction = () => {

  return getEnv() === 'production'
}