# Testing Front-End

# Perquisites to be installed to run tests:

- Node.js & npm
- Type:
- cd /your/project/path
- npm install cypress --save-dev

# How to run?

- First you should replace the folder called **Cypress**, with the attached folder in [FinalExam_Front-End](https://github.com/MohmedMonsef/Test/tree/master/FinalExam_Front-End).
- Type in Terminal “npx cypress open” if you installed npx, or type “./node_modules/.bin/cypress open”.
- Select the spec file from **Integration** file, and click on it

# Testing Android

# How to run e2e tests:

• Perquisites to be installed to run tests:

- Node.js & npm
- Real mobile connected to internet and usb connected to the pc.
- Webdriver.io
- Appium (windows Desktop tool is preferred than Command Line tool)
- Java
- Jdk
- Go to android-sdk  tools  bin, copy this path, got to environment variables  PATH  append this path to it, also append it with ANDROID_HOME name in system variables.
- Go to JAVA  JDK, copy this path, got to environment variables  PATH  append this path to it, also append it with JAVA_HOME name in system variables.

# How to run?

- Open Appium desktop  start server  set the desired capabilities like this format:
- {
-     "platformName":    "Android",
-     "platformVersion": "9.0",
-     "deviceName":      "Redmi note 8",
-     "appPackage":      "com.example.fragspotify",
-     "appActivity":     "com.example.fragspotify.Activities.MainActivity",
-     "automationName":  "UiAutomator2",
-     "udid":            "124c3355"
- }

- To get appPackage and Activity, Open command line, type “adb shell”, then type (dumpsys window windows | grep -E "mCurrentFocus") will see and similar to the above format for the appPackage and appActivity (it will get the information of the current opened application on the mobile).
- Also type “adb devices” and make sure your mobile appear, copy the id number beside the device name and this is “udid” in the above capabilities.
- Go to script path in command line, type node script.js.
