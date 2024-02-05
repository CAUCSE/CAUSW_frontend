import { expect } from '@playwright/test';

export const boardRouterTester = async ({ page }) => {
  // Given : 게시판 페이지로 이동해서
  await page.goto('http://localhost:3000/boards');
  await expect(page.getByText('게시판 목록')).toBeVisible();

  // When : 특정 게시판을 클릭하면
  const button = page.getByRole('link', { name: 'board_example2' });
  await button.click();

  // Then : 해당 게시판의 게시글 페이지로 이동한다
  await expect(page.getByRole('heading', { name: '학생회 공지 게시판' })).toBeVisible();
};
