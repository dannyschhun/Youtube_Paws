import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { Item } from '../../models/YoutubeVid/Item'
import { Youtube } from '../../models/YoutubeVid/Youtube';

@Component({
  selector: 'app-aftermath',
  templateUrl: './aftermath.component.html',
  styleUrls: ['./aftermath.component.css']
})
export class AftermathComponent implements OnInit {

  query: String;
  search:String;
  obj: Youtube;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoService: VideosService
  ) { 
  
  }

  ngOnInit() {
    this.getSearchQuery();
    this.getSearchedVideos();
  }

  getSearchQuery(): void {
    this.query = this.route.snapshot.paramMap.get('query');
    this.query = this.query.split(' ').join('+');
    this.query = "search?part=snippet&type=video&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=" + this.query;
  }

  searched() {
    this.router.navigate(['aftermath/'+this.search]);
  }
  
  getSearchedVideos(): void{

    this.videoService.Search(this.query).subscribe(vids =>{
    localStorage.setItem("searchedVids", JSON.stringify(vids));
    console.log("trying to get vids");
    this.obj = JSON.parse(localStorage.getItem("searchedVids"));
    console.log(this.obj.items[1].id.videoId);
    });
  }
}
