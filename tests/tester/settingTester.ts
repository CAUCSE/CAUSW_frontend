import { test } from '@playwright/test';

import { PAGE_URL } from '../../src/configs/path';

export const settingRouterTester = () => {
  const baseURL = 'http://localhost:3000';
  const settingBackButton = '#root > div > header > div.css-wzsu05-Left.e1i83gr13 > a ';
  const historyBackButton = '#root > div > header > div.css-wzsu05-Left.e1i83gr13 > button';

  test.beforeEach(async ({ page }) => {
    await page.click('#root > div > nav > a:nth-child(5)');
    await page.waitForURL(baseURL + PAGE_URL.Setting);
  });
  test('개인정보 관리 화면', async ({ page }) => {
    await page.getByText('개인정보 관리').click();
    await page.waitForURL(baseURL + PAGE_URL.SettingProfile);
    await page.click(settingBackButton);
    await page.waitForURL(baseURL + PAGE_URL.Setting);
  });
  test('비밀번호 변경 화면', async ({ page }) => {
    await page.getByText('비밀번호 변경').click();
    await page.waitForURL(baseURL + PAGE_URL.SettingPassword);
    await page.click(settingBackButton);
    await page.waitForURL(baseURL + PAGE_URL.Setting);
  });
  test('내가 쓴 글 화면', async ({ page }) => {
    await page.getByText('내가 쓴 글').click();
    await page.waitForURL(baseURL + PAGE_URL.HistoryPost);
    await page.click(historyBackButton);
    await page.waitForURL(baseURL + PAGE_URL.Setting);
  });
  test('내가 쓴 댓글 화면', async ({ page }) => {
    await page.getByText('내가 쓴 댓글').click();
    await page.waitForURL(baseURL + PAGE_URL.HistoryComment);
    await page.click(historyBackButton);
    await page.waitForURL(baseURL + PAGE_URL.Setting);
  });
  test('로그아웃', async ({ page }) => {
    await page.getByText('로그아웃').click();
    await page.waitForURL(baseURL + '/auth/signin');
  });
};
