import MessageController from "../controllers/MessageController";

import express from 'express'

const router = express.Router()

router.post('/:id', MessageController.createMessage)
router.get('/messages/:room', MessageController.listMessages)

export default{
    routes: router
}

