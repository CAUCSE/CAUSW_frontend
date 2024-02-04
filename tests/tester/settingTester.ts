import { expect } from '@playwright/test';

export const settingRouterTester = async ({ page }) => {
  await page.click('#root > div > nav > a:nth-child(5)');
  await page.waitForURL('http://localhost:3000/setting');

  await page.click('#root > div > main > div > section:nth-child(2) > a:nth-child(2)');
  await page.waitForURL('http://localhost:3000/setting/profile');

  await page.click('#root > div > header > div.css-wzsu05-Left.e1i83gr13 > a > svg > g > path');
  await page.waitForURL('http://localhost:3000/setting');
};
