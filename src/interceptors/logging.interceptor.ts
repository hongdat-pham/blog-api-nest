import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const { method, url } = request;

    const startTime = Date.now();

    console.log(`→ ${method} ${url}`);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime;
        console.log(
          `← ${method} ${url} ${response.statusCode} — ${duration}ms`,
        );
      }),
    );
  }
}
