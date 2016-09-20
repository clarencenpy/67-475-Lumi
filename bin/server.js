import config from '../config'
import server from '../server/main'
import api from '../parse/main'
import _debug from 'debug'

const debug = _debug('app:bin:server')
const port = config.server_port
const host = config.server_host
const api_port = config.api_port

server.listen(port)
debug(`Server is now running at http://${host}:${port}.`)
debug(`Server accessible via localhost:${port} if you are using the project defaults.`)

api.listen(8000)
debug(`Parse Server is now running at http://${host}:${api_port}/parse.`)
debug(`Parse Server is now running at http://${host}:${api_port}/dashboard.`)
