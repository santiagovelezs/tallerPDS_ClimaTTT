import { Router } from 'express'
import * as triquiController from '../controllers/triqui.controller'

const router = Router()

router.post('/', triquiController.registerGame)
router.get('/gamesPlayed', triquiController.getGamesPlayed)
router.get('/gamesWin', triquiController.getGamesWin)
router.get('/gamesLost', triquiController.getGamesLost)
router.get('/gamesTie', triquiController.getGamesTie)

export default router

