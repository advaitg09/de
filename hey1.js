const {Builder} = require("selenium-webdriver");

async function main() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://127.0.0.1:8081/eve.html");

    await new Promise(resolve => setTimeout(resolve, 15000));

}

main();
