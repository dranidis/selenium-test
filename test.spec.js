const { By, Builder, Browser } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function (env) {
    describe('First script', function () {
        let driver;

        // before(async function () {
        // });


        it('First Selenium script', async function () {

            driver = await new Builder().forBrowser('firefox').build();

            await driver.get("http://localhost:3000/");

            let title = await driver.getTitle();
            console.log(title);
            assert.equal("MoT Trees", title);

            await driver.manage().setTimeouts({ implicit: 5000 });

            // Click on the "Connect" button
            let connectButton = await driver.findElement(
                By.xpath(`//button[contains(text(), 'Σύνδεση')]`)
            );
            await connectButton.click();

            let email = await driver.findElement(By.id('email'));
            let pwd = await driver.findElement(By.id('password'));
            console.log(email);


            //   assert.equal("Received!", value);

            await driver.quit();
        });
    });
}, { browsers: [Browser.FIREFOX] });