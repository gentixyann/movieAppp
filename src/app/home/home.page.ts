import { ApiService } from './../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movies = {
    id: '',
    title: '',
    overview: '',
    releaseDate: '',
    thumbnail: '',
  };
  list;

  private $movies: Observable<Movie[]>;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getMovies().subscribe((data: any) => {
      console.log(data);
      this.list = data.results;
    });
  }

  getMovies() {
    return this.http.get(this.apiService.getNowPlayingURL);
  }

  getItem() {
    console.log('押した');
  }
}
