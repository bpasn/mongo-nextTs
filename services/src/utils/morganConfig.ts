import morgan from "morgan";
import { Request, Response } from "express";
import config from "config";
import path from "path";
import { createStream } from "rotating-file-stream";
import dayjs from "dayjs";
console.log()
morgan.token('body', (req: Request) => {
    return JSON.stringify(req.body)
})
morgan.token('params', (req: Request) => {
    return JSON.stringify(req.params)
})
morgan.token('query', (req: Request) => {
    return JSON.stringify(req.query)
})

var LogStream = createStream(`${dayjs().format('YYYY-MM-DD')}_requestLog.log`, {
    interval: '1d',
    path: path.join(path.resolve(), 'request_log')
})

export default morgan(config.get<string>("formatLogRequest"), { stream: LogStream })
