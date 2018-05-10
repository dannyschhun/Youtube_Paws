import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { Item } from '../../models/YoutubeVid/Item';
import { Youtube } from '../../models/YoutubeVid/Youtube';
import { VidDescription } from '../../models/VidDetail/VidDescription';
import { ViewSettings } from '../../models/ViewSettings';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-aftermath',
  templateUrl: './aftermath.component.html',
  styleUrls: ['./aftermath.component.css']
})
export class AftermathComponent implements OnInit {


  query: string;
  search: string;
  obj: Youtube;
  vidDescription: VidDescription;
  viewSetting: ViewSettings = this.viewService.getViewSetting();

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private videoService: VideosService,
    private viewService: ViewService
  ) {

  }

  ngOnInit() {
    this.getSearchQuery();
    this.getSearchedVideos();
  }
  //Gets Query from URL Pathand puts it in a proper API search form
  getSearchQuery(): void {
    this.query = this.route.snapshot.paramMap.get('query');
    this.query = this.query.split(' ').join('+');
    this.query = 'search?part=snippet&type=video&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=' + this.query;
  }


  searched() {
    this.router.navigate(['aftermath/' + this.search]);
  }

  getSearchedVideos(): void {

    this.videoService.Search(this.query).subscribe(vids => {
      localStorage.setItem("searchedVids", JSON.stringify(vids));
      console.log("trying to get vids");
      this.obj = JSON.parse(localStorage.getItem("searchedVids"));
      this.query = "videos?part=contentDetails&id=";
      this.obj.items.forEach(element => {
        this.query = this.query + element.id.videoId + ",";
      });
      this.query = this.query.substring(0, this.query.length - 1);
      this.videoService.VideoDescription(this.query).subscribe(descripts => {
        this.vidDescription = JSON.parse(JSON.stringify(descripts));
        console.log("getting descriptions");
        console.log(this.vidDescription);
      })
    });
  }
}
