const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348186442021,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348186442021,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_24_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzFjRStNa3Y0L0dZbTVvUWN0UXJhNW9FYUZGRHlvajdXTVhoSGxET3BCWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVd6SHAwUTBRRnVTdTRHUFRERk9vQVwiLFxuICBcInBob25lSWRcIjogXCIwY2IyZjNlNC0yYTQ1LTRhMTItYjE4NC1iMTQ5MTI3ZGQ0NGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDIxMyxcbiAgICAgIDkyLFxuICAgICAgMTI4LFxuICAgICAgMTQyLFxuICAgICAgMjQ4LFxuICAgICAgMTk2LFxuICAgICAgMjA0LFxuICAgICAgMTkwLFxuICAgICAgMTYwLFxuICAgICAgNDksXG4gICAgICAxMDMsXG4gICAgICA2MixcbiAgICAgIDEyOSxcbiAgICAgIDE3MCxcbiAgICAgIDc5LFxuICAgICAgMjAxLFxuICAgICAgMjE1LFxuICAgICAgMzUsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDE2NyxcbiAgICAgIDE0NyxcbiAgICAgIDE5MixcbiAgICAgIDE0MCxcbiAgICAgIDEyNSxcbiAgICAgIDE5NixcbiAgICAgIDIyNyxcbiAgICAgIDI1MixcbiAgICAgIDEzNyxcbiAgICAgIDEzNSxcbiAgICAgIDc5LFxuICAgICAgNjcsXG4gICAgICAxMjMsXG4gICAgICAxNzMsXG4gICAgICAxNzIsXG4gICAgICAyMDMsXG4gICAgICAyNDcsXG4gICAgICAxMjUsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNenYvdGtIRU9Dd2lyVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIms3WWZsRXhWWnA4WGFXeVRzblpwYWhUYUZYcHdqSkMvQmM0UlNPd0pIMjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEYrKzRGak9TT0ZXQi9SblhUR0xHbXVxTHIwTmpBbmNJa21qWXg0L1U3S2Q5MS9sSkszTE9McXpWZWhaRzBPQllWajkyeGNHdFM4S3dDTzExTnpnQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0JtSnNtWTRsZjNCOWhZanhqZWhkbENyUmRkQnp5a2IvNEV0YkNEbVlxbCs3c2lqaG1ReEZrdWdHeTUrbjdqaDJVeDh6aTNEUGdpYnNuUlVOVFJBanc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg2NDQyMDIxOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjMyMjQxMjE4MzU4NToxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGRU9OTFnwn6SgR0xPQkFM4pyM77iPXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg2NDQyMDIxOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkzMTg3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw0elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDQwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiblJpODZLamhiQTRNblRtSy96TVNyVXRXNXNvRXJWdFIvUmYreGR4Qi9NQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDY3NzczMzg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5MzE4NTU2NjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3RmJYMC9ybFNnbXpjM05QR2tlKzhPWGhyNDV1UkhlWmx6NTlER1NGQitZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjc3NzMzODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTczNTM4MDY4M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw0ei5qc29uIjogIntcImtleURhdGFcIjpcIjVYVU40dlI2VEU5NG1EN0VNTnVYaWZiYkVyb3RSTWVtK2NQeFNHMTVsRDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2Nzc3MzM4OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5MzE4NTQwMDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
