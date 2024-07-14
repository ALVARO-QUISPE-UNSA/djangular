import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiService} from './api.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //movies = [
  //  {title:'peli1'},
  //  {title:'peli2'}
  //];
  movies :any[] = []
  constructor(private api:ApiService) {
    this.getMovies();
  }
  getMovies() {
    this.api.getAllMovies().subscribe({
      next: data => {
        console.log(data);
        this.movies = data;
      },
      error: error => {
        console.error(error);
      }
    });
  }
  getMovieById(idElement : HTMLElement) {
    let idText = idElement.textContent?.trim()
    let id = parseInt(idText ?? '', 10);
    this.api.getMovieById(id).subscribe({
      next: data => console.log(data),
      error: err => console.error(err)
    });
  }
}
