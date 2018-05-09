import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Users } from '../models/Users';


const YOUTUBE_API = environment.youtubeUrl;

@Injectable()
export class VideosService {

  constructor(
    private http: HttpClient
  ) { }

  Search(query: String) {
    return this.http.get(YOUTUBE_API + query);
  }
}
