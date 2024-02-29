import { authHandler } from './authHandler';
import { boardHandler } from './boardHandler';
import { circleHandler } from './circleHandler';
import { commentHandler } from './commentHandler';
import { historyHandler } from './historyHandler';
import { homeHandler } from './homeHandler';
import { lockerHandler } from './lockerHandler';
import { postHandler } from './postHandler';
import { settingHandler } from './settingHandler';

const handlers = [
  ...homeHandler,
  ...postHandler,
  ...commentHandler,
  ...circleHandler,
  ...boardHandler,
  ...lockerHandler,
  ...historyHandler,
  ...settingHandler,
  ...authHandler,
];

export default handlers;
