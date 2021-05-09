export const getEnv = () => {

  return process.env.NODE_ENV
}

export const isProduction = () => {

  const env = getEnv()

  return env === 'production'
}