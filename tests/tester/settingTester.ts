import { expect } from '@playwright/test';

export const settingTester = async ({ page }) => {
  await page.goto('http://localhost:3000/home');

  await expect(page.getByText('동문 네트워크')).toBeVisible();
};
