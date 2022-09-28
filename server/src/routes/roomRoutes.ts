import express from 'express'
import RoomController from "@src/controllers/RoomController";

const router = express.Router()

router.get('/', RoomController.listRooms)

export default{
    routes: router
}

