import { DefaultLoggerFactory } from '@rosen-bridge/abstract-logger';
import WinstonLogger from '@rosen-bridge/winston-logger';

import Configs from './configs/configs';

const winston = new WinstonLogger(Configs.logs);
DefaultLoggerFactory.init(winston);
