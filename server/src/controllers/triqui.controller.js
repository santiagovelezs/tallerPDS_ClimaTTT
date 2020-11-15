import Triqui from '../models/Triqui'
import RESULTS from "../models/results"

export const registerGame = async (req, res) => {
    try{
        const { player, result } = req.body

        const game = new Triqui({
            player,
            result
        })
        const savedGame = await game.save()
        return res.status(200).json({
            _id: savedGame._id,
            player: savedGame.player,
            result: savedGame.result
        })
    }catch(error){
        console.log(error)
    }
}

export const getGamesPlayed = async (req, res) => {
    const n = await Triqui.count()
    return res.json(n)
}

export const getGamesWin = async (req, res) => {
    const n = await Triqui.find({ result: RESULTS.WIN }).count()
    return res.json(n)
}

export const getGamesLost = async (req, res) => {
    const n = await Triqui.find({ result: RESULTS.LOST }).count()
    return res.json(n)
}

export const getGamesTie = async (req, res) => {
    const n = await Triqui.find({ result: RESULTS.TIE }).count()
    return res.json(n)
}
