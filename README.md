# Testing Front-End

## Perquisites to be installed to run tests:

- #### Node.js & npm
- #### Type:
- #### cd /your/project/path
- #### npm install cypress --save-dev

## How to run?

- #### First you should replace the folder called **Cypress**, with the attached folder in [FinalExam_Front-End](https://github.com/MohmedMonsef/Test/tree/master/FinalExam_Front-End).
- #### Type in Terminal “npx cypress open” if you installed npx, or type “./node_modules/.bin/cypress open”.
- #### Select the spec file from **Integration** file, and click on it

# Testing Android

## How to run e2e tests:

### Perquisites to be installed to run tests:

- ### Node.js & npm
- ### Real mobile connected to internet and usb connected to the pc.
- ### Webdriver.io
- ### Appium (windows Desktop tool is preferred than Command Line tool)
- ### Java
- ### Jdk
- ### Go to android-sdk --> tools --> bin, copy this path, got to environment variables --> PATH --> append this path to it, also append it with ANDROID_HOME name in system variables.
- ### Go to JAVA --> JDK, copy this path, got to environment variables --> PATH --> append this path to it, also append it with JAVA_HOME name in system variables.

## How to run?

- ### Open Appium desktop --> start server --> set the desired capabilities like this format:
- "platformName": "Android",
- "platformVersion": "Your Platform Version",
- "deviceName": "Your Device Name",
- "appPackage": "com.example.fragspotify",
- "appActivity": "com.example.spotify.login.IntroActivity",
- "automationName": "UiAutomator2",
- "udid": "Your udid"

- ### To get appPackage and Activity, Open command line, type “adb shell”, then type (dumpsys window windows | grep -E "mCurrentFocus") then you will see similar to the above format for the appPackage and appActivity (it will get the information of the current opened application on the mobile).

- ### Also type “adb devices” and make sure your mobile appear, copy the id number beside the device name and this is “udid” in the above capabilities.

- ### Go to script path in command line, type node **scriptName.js**.

## How to ruun Stress Testing?

- ### Download and install [Jmeter](https://jmeter.apache.org/download_jmeter.cgi)
- ### Open the program and click on file drop down list, then click **open** and select the **.Jmx** file.
- ### click on run icon and click on **View Results Tree** to see the requests' body and response.
