//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348090500188";
global.owner = process.env.OWNER_NUMBER || "2348090500188";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpQVURKdkEvUURtOC85bVp2aGZiZThUa2REZ2cyUDJvei94OU1PZUZWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1UxcWJlZVZoUFlTMlpZdHg3NUkzMk9SQTE2WVhsQUVYQjFqRXV5NXN6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUDBxZlZFeTVhTTlBZU9uQXFtMDNOdXdZS2NScUI3UTk4VXZ4eFVLb0c4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0a0NSVStvbjZqSVVkRnkzZzY2OHYydHlobStvVDM0TnVTVzRzU2VWYkRzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPcm54WXZ5RkFrNnhSUnNjMnh0T0RIVXgyYnNqd1BLdFZZYzM0K2xEa009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xM0tTb3pUZ2dXRDNIY3daZktIaWJQQ1lVZVNXaUh0QWs5aExUbkFiQzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1A4T3NMWlM5NTIrSGFIWmRUMmhkZTQ3MkV0QVcwSElrMk5WQkpMS0lHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicktzM1E0ZU1IVnZML2VMMUthNzFSUmFldDJvbW1GUjBML0lBOGhKcW4wRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklvbEc3NEZrcmtPcE1Fd1ZsNE8yc1lqeE1VM0xwTTJmT0tOYnZhc0MyMEdraTNHTC9qMGthRzFGSU1FYXh6MUdQamFXa2pycFZBdGZ4SWxlOFRjTENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IkdLVHNKWmkzTEswSG9WR2xzT0gvUkxKRmY1RmFOVXkyZ0haeU8vdW5GR2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA5MDUwMDE4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3RjRGRTU4NDNFNzBENTY4NDVFMkEwQjVCQkU3Q0Q2MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NzgzNTE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDkwNTAwMTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFDMDVBOUJBOTRBRDk1MTA3Mjg4MzE0MjI5RTFCQzAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU3ODM1MTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inl5VnpZLWpyVDhpZWRSQXNPaXc3OUEiLCJwaG9uZUlkIjoiMjljMGE1MzUtZWNjZi00MWY5LTkzNGMtODMxNGQ2NzM2N2VkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9oaTRmaTRLOFNTU1hGbW5rbVlKZXhHblhpYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3dDFRS2hycmhhQlQxSzVUdDlIZ3JsWGloNms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1M4MUFLS04iLCJtZSI6eyJpZCI6IjIzNDgwOTA1MDAxODg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKb3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01XSndaWUdFTXk3OWJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InEwOW1Lb1YwYVdyQXA2RHYrWUhQc01MY1FqT3cvNFB5YlJMWmF1VXA0UVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkF4MS9zUlRQajlBMGRpZUFMdjN2R2dTZkJteEhOejI5RFVRN3ZVblgrT2tVQlczU3lVTk84YUNWR3kyZlNKeWRPK3QzV3g3TnR2RXFvQjBvekVheUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKdzRLNnM3WitEaHBpWFhmVzdTWEIwZDFOV3J4MUhRcUorUEJvdFpwYlREc0RFZjZGMUxHMTRvZ3NZU2lqcTZBdTdVcUttemliMFRDdmhlMUJxTEpDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwOTA1MDAxODg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhdFBaaXFGZEdscXdLZWc3L21CejdEQzNFSXpzUCtEOG0wUzJXcmxLZUVHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzgzNTE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1nMSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
