import { test } from '@playwright/test';

import { lockerRouterTester } from './tester/lockerTester';
import { settingRouterTester } from './tester/settingTester';
import { signinTester } from './tester/signinTester';

test.beforeEach(signinTester);
test('setting', settingRouterTester);
test('locker', lockerRouterTester);
