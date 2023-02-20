import express from 'express';
import user from './user.route'
import auth from './auth.route'
const route =express.Router()

route.get('/healthcheck',(_,res) => res.sendStatus(404))
route.use(user)
route.use(auth)
export default route