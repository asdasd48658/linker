import { Telegraf } from "telegraf";
import axios from "axios";
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
dotenv.config()

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id,"Welcome")
//     console.log("started");
//     fs.readFile(path.resolve('D:/123.avi'),function(err,data){
//         if(!err){
//             console.log("sending",data);
//             ctx.telegram.sendVideo(ctx.chat.id,{
//                 source : data,
//                 filename:'123.avi'
//             })
//         }
//         else{
//             console.log("errr");
//         }
//     })
  
})


/////////////////  Menu //////////////////////
// function menu(ctx) {
//     ctx.deleteMessage()
//     bot.telegram.sendMessage(ctx.chat.id, "Your Telegram Cloud Drive", {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text: "Documnts", callback_data: "docs" }],
//                 [{ text: "Videos", callback_data: "vid" }],
//                 [{ text: "Images", callback_data: "img" }],
//                 [{ text: "Audio", callback_data: "aud" }],
//             ]
//         }
//     })
// }


// bot.on('message', (ctx) => {
//     const msg = ctx.message;
//     console.log(msg);
//     if (msg.document || msg.video || msg.audio || msg.animation || msg.voice || msg.photo || msg.video_note) {
//         const data = {
//             user_id: msg.from.id,
//             date: msg.date,
//             file: {
//                 ...(msg.document && msg.document),
//                 ...(msg.photo && msg.photo[0]),
//                 ...(msg.video && msg.video),
//                 ...(msg.audio && msg.audio),
//                 ...(msg.animation && msg.animation)
//             },
//             type: (msg.document && "document" || (msg.photo && "photo") || (msg.video && "video") || (msg.audio && "audio") || (msg.animation && "animation"))
//         }

//         if (send_data(data)) {
//             bot.telegram.sendMessage(data.user_id, `File Saved #Filename : ${ctx.message.id}`)
//         }
//         else {
//             bot.telegram.sendMessage(data.user_id, "Try Again Later Some Error Occured")
//         }
//         ctx.deleteMessage();
//     }

// })




///////Function to send user data to server ////////
async function send_data(data) {
    const url = process.env.URL

    await axios.post(url, data)
        .then((res) => {
            console.log(res.status);
            return true
        })
        .catch((err) => {
            console.log(err);
            return false
        })
}




///////Function to GET user data from server ////////
async function get_data(user_id) {
    const url = process.env.URL
    let result
    await axios.get(url)
        .then((res) => result = res.data)
        .catch((res) => bot.telegram.sendMessage(data.user_id, "Try Again Later Some Error Occured"))
    return result

}

bot.launch()

