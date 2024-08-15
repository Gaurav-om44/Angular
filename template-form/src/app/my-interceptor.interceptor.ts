// my-interceptor.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer your-auth-token')
    });

    // Log the outgoing request
    console.log('Outgoing request', modifiedRequest);

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Log the response if needed
            console.log('Incoming response', event);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          // Handle errors
          console.error('Error occurred:', error);
          return throwError(error);
        })
      );
  }
}
