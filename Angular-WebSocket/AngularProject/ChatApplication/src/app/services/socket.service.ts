import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket = io("http://localhost:8000", {});

  constructor() { }

  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on("message", (message) => {
        observer.next(message);
      });


      this.socket.on("newMessage", (message) => {
        this.socket.emit("message", message);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

  sendMessage(message: string) {
    this.socket.emit("newMessage", message);
  }
}