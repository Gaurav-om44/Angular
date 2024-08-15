import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const { username, password } = this.registerForm.value;
    this.authService.register(username, password).subscribe(() => {
      // handle successful registration, maybe navigate to login or show a message
    });
  }
}
