import { pino } from 'pino';

export const logger = pino();

export const createChildLogger = (module: string) => logger.child({ module });

export type Logger = pino.Logger;

export type BaseLogger = pino.BaseLogger;
