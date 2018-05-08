import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-aftermath',
  templateUrl: './aftermath.component.html',
  styleUrls: ['./aftermath.component.css']
})
export class AftermathComponent implements OnInit {

  query: String;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideosService
  ) { }

  ngOnInit() {
    this.getSearchQuery();
    this.getSearchedVideos();
  }

  getSearchQuery(): void {
    this.query = this.route.snapshot.paramMap.get('query');
    this.query = this.query.split(' ').join('+');
  }
  
  getSearchedVideos(): void{
    this.videoService.Search().subscribe(vids =>{
    console.log(vids);
    });
  }
}
