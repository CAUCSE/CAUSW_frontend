import { boardHandler } from './boardHandler';
import { circleHandler } from './circleHandler';
import { historyHandler } from './historyHandler';
import { homeHandler } from './homeHandler';
import { lockerHandler } from './lockerHandler';
import { postHandler } from './postHandler';

const handlers = [
  ...homeHandler,
  ...postHandler,
  ...circleHandler,
  ...boardHandler,
  ...lockerHandler,
  ...historyHandler,
];

export default handlers;
