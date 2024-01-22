import { boardHandler } from './boardHandler';
import { circleHandler } from './circleHandler';
import { homeHandler } from './homeHandler';
import { postHandler } from './postHandler';

const handlers = [...homeHandler, ...postHandler, ...circleHandler, ...boardHandler];

export default handlers;
