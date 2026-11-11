
const {Builder, By} = require("selenium-webdriver");

async function main() 
{
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.google.com");
    console.log("TC1: Google opened successfully");

    let title = await driver.getTitle();

    if (title.includes("Google"))
        console.log("TC2: Page title verified");
    else
        console.log("TC2: Page title verification failed");

    let searchBox = await driver.findElement(By.name("q"));

    if (searchBox)
        console.log("TC3: Search box found successfully");

    await driver.quit();
}

main();
