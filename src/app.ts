import { App } from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new App({
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  token: process.env.SLACK_BOT_TOKEN,
});

app.message(":clap:", async ({ message, say }: any) => {
    await say(`Hello <@${message.user}>! :clap:`);
});

(async () => {
  await app.start(Number(process.env.PORT) || 3000);
  console.log("⚡️ Bolt app is running!");
})();
