// javascript
const wdio = require("webdriverio");
const assert = require("assert");
const { execPath } = require("process");

const opts = {
  port: 4723,
  path: "/wd/hub",
  capabilities: {
    platformName: "Android",
    platformVersion: "9.0",
    deviceName: "Redmi note 8",
    appPackage: "com.example.spotify",
    appActivity: "com.example.spotify.login.IntroActivity",
    automationName: "UiAutomator2",
    udid: "124c3355"
  }
};

async function id(client, idstr) {
  el = await client.findElement("id", idstr);
  return await client.$(el);
}
async function click(client, idstr) {
  el = await id(client, idstr);
  await el.click();
  await client.pause(2000);
}

async function main() {
  let email = "lenaa.sayed7@gmail.com",
    password = "12345678";

  const client = await wdio.remote(opts);

  await click(client, "com.example.spotify:id/intro_login_button");
  el1 = await id(client, "com.example.spotify:id/email");
  await el1.setValue(email);
  el1 = await id(client, "com.example.spotify:id/password");
  await el1.setValue(password);

  await click(client, "com.example.spotify:id/loginButton");

  await click(client, "com.example.spotify:id/navigation_premium");

  await click(client, "com.example.spotify:id/text_premium");
}

main();
