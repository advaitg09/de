
const {Builder, By} = require("selenium-webdriver");

async function main() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://127.0.0.1:8081/eve.html");

    await driver.findElement(By.id("name")).sendKeys("John");

    await driver.findElement(By.id("email")).sendKeys("john@gmail.com");

    await driver.findElement(By.id("phone")).sendKeys("9876543210");

    await new Promise(resolve => setTimeout(resolve, 10000));

    await driver.quit();
}

main();
