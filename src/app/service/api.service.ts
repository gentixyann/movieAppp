import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = 'a1a357b8cd4732e4d9c84ecc9a1d7406';
  // 最後に &language=ja をつけると日本語に
  getNowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`;

  constructor() { }
}
