const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("http://localhost:3000/");

    let welcomeMessage = await driver.findElement(
      By.xpath(`//*[contains(text(), 'Καλωσήρθες στο "ΠοτίΖΩ"!')]`)
    );

    if (welcomeMessage.isDisplayed()) {
      console.log("Login test passed");
    } else {
      console.log("Login test failed");
    }

    // Wait for the "Connect" button to appear anywhere on the page
    let connectButton = await driver.wait(
      until.elementLocated(By.xpath(`//button[contains(text(), 'Σύνδεση')]`)),
      5000
    );

    if (connectButton.isDisplayed()) {
      console.log("Connect button is present");
    } else {
      console.log("Connect button is not present");
    }
  } finally {
    // await driver.quit();
  }
})();

(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("http://localhost:3000/");
    // Click on the "Connect" button
    let connectButton = await driver.findElement(
      By.xpath(`//button[contains(text(), 'Σύνδεση')]`)
    );
    await connectButton.click();

    // Wait for the "email" input element to be present
    await driver.wait(until.elementLocated(By.id("email")), 5000);

    // Wait for the "password" input element to be present
    await driver.wait(until.elementLocated(By.id("password")), 5000);

    console.log("Test completed successfully");
  } finally {
    // await driver.quit();
  }
})();
