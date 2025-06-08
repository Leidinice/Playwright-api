const { chromium } = require('playwright');

async function runTest() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  await browser.close();
  return title;
}

module.exports = runTest;
