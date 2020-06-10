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
  const client = await wdio.remote(opts);

  await click(client, "com.example.spotify:id/signup");

  let emailText = await id(client, "com.example.spotify:id/sign_up_email");
  await emailText.setValue("Fakeee@acc.com");
  await client.pause(2000);

  await click(client, "com.example.spotify:id/confirm_email_button");
  await client.pause(2000);

  let passwordText = await id(
    client,
    "com.example.spotify:id/sign_up_password"
  );
  await passwordText.setValue("123456789");

  await click(client, "com.example.spotify:id/confirm_password_button");
  await client.pause(2000);

  await click(client, "com.example.spotify:id/confirm_date_button");
  await client.pause(4000);

  await click(client, "com.example.spotify:id/male_button");
  await client.pause(2000);

  let accountName = await id(client, "com.example.spotify:id/sign_up_name");
  await accountName.setValue("Tarek");

  await click(client, "com.example.spotify:id/create_button");
  await client.pause(2000);
}

main();
