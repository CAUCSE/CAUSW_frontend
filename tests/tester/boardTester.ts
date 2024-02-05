import { expect, test } from '@playwright/test';

import { PAGE_URL } from '../../src/configs/path';

export const boardRouterTester = () => {
  const baseURL = 'http://localhost:3000';

  test.beforeEach(async ({ page }) => {
    // When : 게시판 버튼을 클릭하면
    await page.click('#root > div > nav > a:nth-child(4)');
    // Then : 게시판 페이지로 이동한다
    await page.waitForURL(baseURL + PAGE_URL.Board);
  });
  test('게시판을 클릭하면 해당 게시판의 게시글 페이지로 이동한다.', async ({ page }) => {
    // When : 특정 게시판을 클릭하면
    const button = page.getByRole('link', { name: 'board_example2' });
    await button.click();
    const boardId = 'ff8080818d551014018d551354100000';
    const targetUrl = `http://localhost:3000/boards/${boardId}/posts`;
    await page.waitForURL(targetUrl);

    // Then : 해당 게시판의 게시글 페이지로 이동한다
    await expect(page.getByText('2024.01.11')).toBeVisible();
  });

  test('게시글을 클릭하면 해당 게시글의 상세보기 페이지로 이동한다.', async ({ page }) => {
    const boardButton = page.getByRole('link', { name: 'board_example2' });
    await boardButton.click();

    // When : 특정 게시글을 클릭하면
    await page.click('#root > div > main > div > div > div > div > a');
    const boardId = 'ff8080818d551014018d551354100000';
    const targetUrl = `http://localhost:3000/boards/${boardId}/posts/0`;
    await page.waitForURL(targetUrl);

    // Then : 해당 게시판의 게시글 페이지로 이동한다
    await expect(page.getByPlaceholder('댓글 내용 입력')).toBeVisible();
  });
};
