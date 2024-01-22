import { circleHandler } from './circleHandler';
import { homeHandler } from './homeHandler';
import { postHandler } from './postHandler';

const handlers = [...homeHandler, ...postHandler, ...circleHandler];

export default handlers;
