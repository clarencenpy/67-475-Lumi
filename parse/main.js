import http from 'http'
import config from '../config'
import express from 'express'
import { ParseServer } from 'parse-server'
import ParseDashboard from 'parse-dashboard'

const api = new ParseServer(config.parse_config.api)
const dashboard = new ParseDashboard(config.parse_config.dashboard)

const app = express()

app.use('/parse', api)
app.use('/dashboard', dashboard)

export default http.createServer(app)

