import express from 'express';
import user from './user.route'
const route =express.Router()

route.get('/healthcheck',(_,res) => res.sendStatus(404))
route.use(user)
export default route