import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User'


const YOUTUBE_API = environment.youtubeUrl;

@Injectable()
export class VideosService {

  constructor(
    private http: HttpClient
  ) { }

  Search() {
    return this.http.get(YOUTUBE_API + 'search?part=snippet&type=video&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=call+me+kevin');
  }
}
