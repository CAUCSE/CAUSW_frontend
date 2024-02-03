import { test, expect } from '@playwright/test';

import { ADMIN } from './account';

test('sign-in', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder('아이디').fill(ADMIN.ID);
  await page.getByPlaceholder('비밀번호').fill(ADMIN.PW);

  await page.click('#root > div > div > form > button');
});
