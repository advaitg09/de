const {Builder} = require("selenium-webdriver");

async function main() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.google.com");

    await new Promise(resolve => setTimeout(resolve, 10000));

}

main();
