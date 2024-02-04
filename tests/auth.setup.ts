import { test, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

import { ADMIN } from './account';

test('authenticate', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder('아이디').fill(ADMIN.ID);
  await page.getByPlaceholder('비밀번호').fill(ADMIN.PW);

  await page.click('#root > div > div > form > button');

  await page.waitForURL('http://localhost:3000/home');

  //await expect(page.url() === 'http://localhost:3000/home');

  await page.context().storageState({ path: authFile });
});
