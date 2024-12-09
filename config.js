const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_59_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICA4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyL3JOcTBreHFMd2tFY2F0WFVVU1FxL2JzMXNpZ2FDcUQwRUw1MTYzOUZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBX25FZDI3MVNiT3VvcTZqN19TMnpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImJmYmI0NTlmLTNlYWQtNDliNS1hNGRjLTAwY2I5MWM3MDJiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxOTQsXG4gICAgICA4NixcbiAgICAgIDEwNCxcbiAgICAgIDEwNCxcbiAgICAgIDYxLFxuICAgICAgMTAzLFxuICAgICAgMTI3LFxuICAgICAgMTgsXG4gICAgICAyMjgsXG4gICAgICA1MSxcbiAgICAgIDg1LFxuICAgICAgMTE3LFxuICAgICAgMTMsXG4gICAgICAyNyxcbiAgICAgIDI5LFxuICAgICAgMjM0LFxuICAgICAgMTkzLFxuICAgICAgMyxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAyNyxcbiAgICAgIDE5NixcbiAgICAgIDE1NyxcbiAgICAgIDg2LFxuICAgICAgMTU3LFxuICAgICAgOCxcbiAgICAgIDI0MyxcbiAgICAgIDQ2LFxuICAgICAgMTYyLFxuICAgICAgMTQ2LFxuICAgICAgMjUwLFxuICAgICAgMTQ0LFxuICAgICAgNzEsXG4gICAgICAxMDYsXG4gICAgICA4LFxuICAgICAgNDIsXG4gICAgICAyMjcsXG4gICAgICAzMSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDI3TjVTQUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzNjgwOTY4ODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODk1MjA0NzMxMjQ5OTc6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHlSdmRnR0VPMkIyYm9HR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2U0F0MktOb0RXbEg2V3dTUTRYN3NTVkhuaUswNkFuem1LNkE4clg2c1N3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxoM0pCblUwenBia2UrZjB5SlR6VEY1SHZnQjlkbWNWUTh1SjVVUzdtejZ0STRyWVdGeEk0cUtGZ1hNa2xsMGR0WC9WVHNtLzFjKzQzTmt0WkdFM0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkp2R0xMRWJiUDBNeThHNDFZU1loczBhNGhTVC85aE5iS1l4ZGxJSjlOTmNRSGRtS0ZQVTNEZzZ2dms0TWpHSEdRaVpoWFVDaTZiL2F5THhmZHFCQWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNjgwOTY4ODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzcwNTk3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxTc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFNzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXF4Y0k0SDQvVHBuSG5Ha3JHYWtmVkZMR0gyQlNLRTVCcmJTcnNhMG1xZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzk2MTYzNzcyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
