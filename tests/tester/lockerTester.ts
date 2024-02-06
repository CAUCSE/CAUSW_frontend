import test, { expect } from '@playwright/test';

import { PAGE_URL } from '../../src/configs/path';
import { lockerAllLocationsList, lockerLocationsList } from '../../src/mocks/data/locker';

export const lockerRouterTester = () => {
  const baseURL = 'http://localhost:3000';

  test.beforeEach('사물함 화면', async ({ page }) => {
    await page.click(
      '#root > div > main > div > div.css-1nqe5pb-Wrapper.egppv972 > a.css-xetqcl-ClearLink.ec7tn3u2 > div.css-1fukgrq-Circle.egppv971',
    );
    await page.waitForURL(baseURL + PAGE_URL.Locker);
  });
  test('사물함 Locaion을 클릭하면, Location 상세 페이지로 이동한다.', async ({ page }) => {
    await page.click('#root > div > main > div > a');
    await page.waitForURL(`${baseURL}/locker/${lockerAllLocationsList.lockerLocations[0].id}`);

    await expect(page.getByText(lockerAllLocationsList.lockerLocations[0].name)).toBeVisible();

    const lockerList = lockerLocationsList.lockerList;

    const mineLockerName = lockerList.find(locker => locker.isMine === true)?.lockerNumber;
    if (mineLockerName) {
      const mineLocker = page.getByText(mineLockerName);
      await expect(mineLocker).toBeVisible();
      await mineLocker.click();
      await expect(page.getByText('연장하기')).toBeVisible();
      await expect(page.getByText('반환하기')).toBeVisible();
    }
  });
};
