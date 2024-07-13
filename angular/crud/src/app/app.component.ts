import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies = [
    {title:'peli1'},
    {title:'peli2'}
  ];
  constructor(private api:ApiService) {
    this.getMovies();
  }
  getMovies() {
    this.api.getAllMovies().subscribe({
      next: data => {
        console.log(data);
        this.movies = data.results;
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
