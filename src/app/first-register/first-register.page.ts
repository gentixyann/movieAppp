import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-first-register',
  templateUrl: './first-register.page.html',
  styleUrls: ['./first-register.page.scss'],
})
export class FirstRegisterPage implements OnInit {
  query: string;
  movies: any[];
  isTapped = false;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  search() {
    console.log(this.query);
    if (this.query) {
      const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiService.apiKey}&query=${this.query}`;
      return this.http.jsonp(searchURL, 'callback').subscribe((data: any) => {
        this.movies = data.results;
      });
    } else {
      console.log('もうあるよ！');
    }
  }

  itemTap(movie) {
    this.isTapped = true;
    console.log('押された' + movie.title);
  }

}
