import { PAGE_URL } from '../../src/configs/path';

export const lockerRouterTester = async ({ page }) => {
  const baseURL = 'http://localhost:3000';

  await page.click(
    '#root > div > main > div > div.css-1nqe5pb-Wrapper.egppv972 > a.css-xetqcl-ClearLink.ec7tn3u2 > div.css-1fukgrq-Circle.egppv971',
  );
  await page.waitForURL(baseURL + PAGE_URL.Locker);
};
