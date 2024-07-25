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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348186442021,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348186442021,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_09_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICA0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInR1VlNhN0lCd05qTkE1eG5oV3hyWis0VHhlYjM1REREVXRIL0dNVk5lL1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBjT0ZCNFkyUUlXcERTNk9uM21ENndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWU0ZWNhNTYtMzBiNS00ZThhLTljYWUtNWJmNmQwNmYwMTEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTE4LFxuICAgICAgMjQ3LFxuICAgICAgMTE3LFxuICAgICAgMTkyLFxuICAgICAgNDMsXG4gICAgICAxNjMsXG4gICAgICAxNzksXG4gICAgICA3NixcbiAgICAgIDE4MixcbiAgICAgIDksXG4gICAgICAxMDUsXG4gICAgICA3MCxcbiAgICAgIDI1MCxcbiAgICAgIDExMixcbiAgICAgIDE1OSxcbiAgICAgIDIxNixcbiAgICAgIDE0MyxcbiAgICAgIDIwMyxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAzOCxcbiAgICAgIDE2MSxcbiAgICAgIDI0OCxcbiAgICAgIDE2OCxcbiAgICAgIDUxLFxuICAgICAgMjM3LFxuICAgICAgMTIxLFxuICAgICAgMTY2LFxuICAgICAgMjQyLFxuICAgICAgMjExLFxuICAgICAgMTcyLFxuICAgICAgNjksXG4gICAgICAxNjEsXG4gICAgICAyMTAsXG4gICAgICAxMzQsXG4gICAgICAxNDQsXG4gICAgICA0OCxcbiAgICAgIDQ0LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNenYvdGtIRU5HcGlyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIms3WWZsRXhWWnA4WGFXeVRzblpwYWhUYUZYcHdqSkMvQmM0UlNPd0pIMjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiak5CNVhUc3pWV3hHTlBhTUdCMURVVGxVRWhWeHZDVHdpQUxZTFdrajkyekk1dnhhRFl6bVNtOTZ0RktEeTZnTEJ1S3Y2NHpQaDRnMzc3K25pUjl2RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieG8xcFZlSkJKK21nRUY0UnlNMVdMMEV4QnNRVklxcEFZclVFbkJ6QytDRVZYb3dnN1FTdUFIS3pPVFhWcFhCT0d3Y3JSWTZJL3V0aGFvQkNOdzRzRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg2NDQyMDIxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjMyMjQxMjE4MzU4NToxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGRU9OTFnwn6SgR0xPQkFM4pyM77iPXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg2NDQyMDIxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkzMDk2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw0eFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDR4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0ZiWDAvcmxTZ216YzNOUEdrZSs4T1hocjQ1dVJIZVpsejU5REdTRkIrWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDY3NzczMzg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3MzUzODA2ODNcIn0iCn0="  // PUT your SESSION_ID 


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
