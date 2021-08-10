import {Plugin} from 'vite'

const plugin = (): Plugin => {
  return {
    name: 'vite-plugin-ssr-i18n',
    configureServer(server) {
      console.log(server)
      console.log(server.middlewares)

      server.middlewares.use((req, res, next) => {
        console.log('=================================')
        console.log(req, res)
        next()
      })
    }
  }
}


export default plugin
