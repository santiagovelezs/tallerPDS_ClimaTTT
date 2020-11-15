import { Schema, model } from "mongoose"
import RESULTS from "./results"

const triquiSchema = new Schema({
    player: { type: String, required: true },
    result: { type: String, enum:[RESULTS.WIN, RESULTS.LOST, RESULTS.TIE]}
},
    {
    timestamps: true,
    versionKey: false,
    }
)

module.exports = model('Triqui', triquiSchema)