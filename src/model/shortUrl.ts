import mongoose from "mongoose";
import { nanoid } from "nanoid";

const shortUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required:true
    },
    shortUrl:{
        type: String,
        required: true,
        default:()=>nanoid().substring(0,10)
        // default:()=>{return nanoid().substring(0,10)}
    },
    click: {
        type: Number,
        default:0
    }
}, {
    timestamps: true
})

export const urlModel = mongoose.model("shortUrl",shortUrlSchema)  