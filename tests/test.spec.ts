import { test } from '@playwright/test';

import { settingRouterTester } from './tester/settingTester';
import { signinTester } from './tester/signinTester';

test.beforeEach(signinTester);
test('setting', settingRouterTester);
