

const {Builder, By} = require("selenium-webdriver");

async function main() {

    let driver = await new Builder().forBrowser("chrome").build();

    console.log("Starting Selenium Testing");

    await driver.get("http://127.0.0.1:8081/eve.html");
    console.log("TC1: Website opened successfully");

    await driver.findElement(By.id("name")).sendKeys("John");
    console.log("TC2: Name entered successfully");

    await driver.findElement(By.id("email")).sendKeys("john@gmail.com");
    console.log("TC3: Email entered successfully");

    await driver.findElement(By.id("phone")).sendKeys("9876543210");
    console.log("TC4: Phone number entered successfully");

    console.log("All test cases completed!");

    await new Promise(resolve => setTimeout(resolve, 10000));

    await driver.quit();
}

main();
