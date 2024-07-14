import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) {
  }
  getAllMovies():Observable<any>{
    return this.http.get(this.baseurl + '/movie/',
                         {headers:this.httpHeaders})
  }
  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${id}/`, { headers: this.httpHeaders });
  }
  createMovie(movie: any): Observable<any> {
    return this.http.post(`${this.baseurl}/movie/`, movie, { headers: this.httpHeaders });
  }
  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put(`${this.baseurl}/movie/${id}/`, movie, { headers: this.httpHeaders });
  }
  partialUpdateMovie(id: number, movie: any): Observable<any> {
    return this.http.patch(`${this.baseurl}/movie/${id}/`, movie, { headers: this.httpHeaders });
  }
  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/movie/${id}/`, { headers: this.httpHeaders });
  }



}
