import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service'; 

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
