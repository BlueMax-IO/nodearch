import { Service, Logger } from '@nodearch/core';
import { IHttpErrorsOptions } from '../interfaces';
import express from 'express';
import { HttpError, InternalServerError } from '../http-errors';
import { ServerConfig } from './server.config';


@Service()
export class HttpErrorsRegistry {

  private httpErrorsOptions: IHttpErrorsOptions;
  private logger: Logger;

  constructor(serverConfig: ServerConfig, logger: Logger) {
    this.httpErrorsOptions = serverConfig.httpErrorsOptions;
    this.logger = logger;
  }

  private defaultHandler(httpError: HttpError, res: express.Response) {
    res.status(httpError.code).json({
      error: httpError.message,
      data: httpError.data || undefined
    });
  }

  handleError(error: any, res: express.Response) {
    const httpError: HttpError = error instanceof HttpError ? error : new InternalServerError(error.message);

    const handler = this.httpErrorsOptions?.customErrors?.find(err => httpError instanceof err.error)?.handler || this.httpErrorsOptions?.handler || this.defaultHandler;
    handler(httpError, res, this.logger);
  }
}
