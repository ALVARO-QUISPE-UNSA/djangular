import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiService} from './api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //movies = [
  //  {title:'peli1'},
  //  {title:'peli2'}
  //];
  nuevaPelicula = {
    title: '',
    desc: '',
    year: NaN,
  };
  busqueda = "";
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
  getMovieById(idElement : HTMLInputElement) {
    let idText = idElement.value?.trim();
    console.log('valor: ', idText);
    this.api.getMovieById(idText ?? '').subscribe({
      next: data => {
        this.busqueda = data.title;
        console.log(data)
      },
      error: err => console.error(err)
    });
  }

  createMovie() {
    this.api.createMovie(this.nuevaPelicula).subscribe({
      next: data => {
        this.movies.push(data);
        console.log(data);
      },
      error: err => console.error(err)
    });

  }

  xd(input : HTMLInputElement) {
    let inputText = input.value.trim();
    this.api.createMovie(inputText).subscribe({
      next: data => console.log(data),
      error: err => console.error(err)
    });
  }

}
