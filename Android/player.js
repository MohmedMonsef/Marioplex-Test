const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
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
}
async function main() {
  const client = await wdio.remote(opts);
  let el1 = await client.$(
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ImageView[3]"
  );
  await el1.click();
  await client.pause(1000);
  let email = "a@doesnotexist111.com";
  let password = "aaaa";
  let name = "a";
  el1 = await id(client, "com.example.spotify:id/email");
  await el1.setValue(email);
  el1 = await id(client, "com.example.spotify:id/password");
  await el1.setValue(password);
  el1 = await id(client, "com.example.spotify:id/password");
  await el1.click();
  await click(client, "com.example.spotify:id/loginButton");
  await client.pause(2000);
  el1 = await id(client, "com.example.spotify:id/bottom_play_pause");
  await el1.click();
  el1 = await id(client, "com.example.spotify:id/bottom_image_id");
  await el1.click();
  await client.pause(1000);
  el1 = await id(client, "com.example.spotify:id/start_time");
  t1 = await el1.getText();
  await client.pause(1000);
  el1 = await id(client, "com.example.spotify:id/start_time");
  t2 = await el1.getText();
  assert(t1 != t2);

  await client.deleteSession();
}
main();
