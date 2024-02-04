import { expect } from '@playwright/test';

export const settingTester = async ({ page }) => {
  await page.goto('http://localhost:3000/home');

  await page.click('#root > div > nav > a.css-1coshah-LinkStyle.e1w6r2gj0.active');

  await expect(page.url() === 'http://localhost:3000/setting');
};
