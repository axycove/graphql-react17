import dotenv from 'dotenv'
import config from './config.json'
dotenv.config()

type Db = {
  dialect: string
  host: string
  port: string
  database: string
  username: string
  password: string
}

type Security = {
  secretKey: string
  expiresIn: string
}

type Server = {
  port: number
}

const {
  DB_DIALECT = '',
  DB_PORT = '',
  DB_HOST = '',
  DB_DATABASE = '',
  DB_USERNAME = '',
  DB_PASSWORD = '',
} = process.env

const db: Db = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
}

const { security, server } = config

export const $db: Db = db
export const $security: Security = security
export const $server: Server = server
