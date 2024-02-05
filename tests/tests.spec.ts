import { test } from '@playwright/test';

import { boardRouterTester } from './tester/boardTester';
import { lockerRouterTester } from './tester/lockerTester';
import { settingRouterTester } from './tester/settingTester';
import { signinTester } from './tester/signinTester';

test.describe.configure({ mode: 'parallel' });
test.beforeEach(signinTester);
test.describe('setting', settingRouterTester);
test.describe('locker', lockerRouterTester);
test.describe('board', boardRouterTester);
