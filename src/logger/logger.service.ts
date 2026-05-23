import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(context: string, message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${context}] ${message}`);
  }
}
