// src/app/demo/demo.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.dataService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (error) => this.errorMessage = error
    });
  }

  addPost() {
    const newPost = { title: 'New Post' };
    this.dataService.addPost(newPost).subscribe({
      next: (data) => this.posts.push(data),
      error: (error) => this.errorMessage = error
    });
  }

  updatePost(id: number) {
    const updatedPost = { title: 'Updated Post' };
    this.dataService.updatePost(id, updatedPost).subscribe({
      next: (data) => {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
          this.posts[index] = data;
        }
      },
      error: (error) => this.errorMessage = error
    });
  }

  deletePost(id: number) {
    this.dataService.deletePost(id).subscribe({
      next: () => this.posts = this.posts.filter(post => post.id !== id),
      error: (error) => this.errorMessage = error
    });
  }
}
