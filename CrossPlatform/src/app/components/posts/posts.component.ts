import { Component } from '@angular/core';
import { ApiHandlerService } from '../../services/api-handler.service';
import { NgFor, NgIf } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgIf, NgFor],

  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  apiData: any;

  constructor(private postsService: ApiHandlerService) {
  }

  ngOnInit(): void {
    this.postsService.fetchDataFromApi().subscribe((data) => {
      this.apiData = data;
    });

  }

}
