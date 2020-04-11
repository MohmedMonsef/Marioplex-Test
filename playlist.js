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
async function text(client, idstr) {
  el = await id(client, idstr);
  return await el.getText();
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
  el1 = await client.$("~settings");
  await el1.click();
  await click(client, "com.example.spotify:id/user_name");
  numplaylists1 = text(client, "com.example.spotify:id/no_of_playlists");
  await click(client, "com.example.spotify:id/bottom_image_id");
  await client.pause(1000);
  await click(client, "com.example.spotify:id/song_settings_button");
  await click(client, "com.example.spotify:id/settings_add_to_playlist");
  await click(client, "com.example.spotify:id/new_playlist_button");
  await client.pause(1000);
  el1 = await id(client, "com.example.spotify:id/playlist_name_edit_text");
  await el1.setValue("f\f");

  await client.deleteSession();
}
main();
