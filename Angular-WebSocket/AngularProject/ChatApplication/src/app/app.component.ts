import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './services/message.service';
import { SocketService } from './services/socket.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  form: FormGroup;
  messages: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService,
    private socketService: SocketService
  ) {

    this.form = this.formBuilder.group({
      message: ''
    });

  }
  ngOnInit(): void {

    this.socketService.getMessages().subscribe((message: any) => {
      this.messages.push(message);

    });

  }


  register() {
    this.messageService.create(this.form.getRawValue()).subscribe({
      next: (response) => {
        let temp : any = response;
        this.messages.push(temp.message);
        this.form.reset(); // Reset the form after sending the message
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
