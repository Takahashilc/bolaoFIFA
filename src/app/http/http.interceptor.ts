import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreService } from '../core/core.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(private coreService: CoreService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.coreService.isAutheticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.coreService.getToken()}`,
        },
      });
    }

    return next.handle(request);
  }
}
