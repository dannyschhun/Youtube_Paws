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

  temp: string[];
  vidMins: number[];
  showVid: boolean[];
  query: string;
  search: string;
  obj: Youtube;
  vidDescription: VidDescription;
  viewSetting: ViewSettings = this.viewService.getViewSetting();
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private videoService: VideosService,
    private viewService: ViewService
  ) {
    if (!this.loggedIn) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.getSearchQuery();
    this.getSearchedVideos();
  }
  // Gets Query from URL Pathand puts it in a proper API search form
  // Checks view setting to see time range we want
  getSearchQuery(): void {
    // Get's query from URL and and gets the right API url based on our view settings
    this.query = this.route.snapshot.paramMap.get('query');
    this.query = this.query.split(' ').join('+');
    if (this.viewSetting.lengthMax < 5) {
      this.query = 'search?part=snippet&type=video&videoDuration=short&publishedAfter='
      + this.viewSetting.uploadTimeMin + '&publishedBefore=' + this.viewSetting.uploadTimeMax
      + '&maxResults=50&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=' + this.query;
    } else if (this.viewSetting.lengthMin > 5 && this.viewSetting.lengthMax < 20) {
      this.query = 'search?part=snippet&type=video&videoDuration=medium&publishedAfter='
      + this.viewSetting.uploadTimeMin + '&publishedBefore=' + this.viewSetting.uploadTimeMax
      + '&maxResults=50&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=' + this.query;
    } else if (this.viewSetting.lengthMin > 19) {
      this.query = 'search?part=snippet&type=video&videoDuration=long&publishedAfter='
      + this.viewSetting.uploadTimeMin + '&publishedBefore=' + this.viewSetting.uploadTimeMax
      + '&maxResults=50&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=' + this.query;
    } else {
      this.query = 'search?part=snippet&type=video&publishedAfter=' + this.viewSetting.uploadTimeMin
      + '&publishedBefore=' + this.viewSetting.uploadTimeMax + '&maxResults=50&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8&q=' + this.query;
    }
  }


  searched() {
    this.router.navigate(['aftermath/' + this.search]);
  }

  getSearchedVideos(): void {
    // vvvvvvv Search video based on query and upload time vvvvvvvvv
    this.videoService.Search(this.query).subscribe(vids => {
      localStorage.setItem('searchedVids', JSON.stringify(vids));
      console.log('trying to get vids');
      this.obj = JSON.parse(localStorage.getItem('searchedVids'));
      this.query = 'videos?part=contentDetails&id=';
      this.obj.items.forEach(element => {
        this.query = this.query + element.id.videoId + ',';
      });
      this.query = this.query.substring(0, this.query.length - 1);
    // ^^^^^^^^ Search video based on query and upload time ^^^^^^^^^

    // vvvvvvvv Search each search video for it's details to get duration time of each vvvvvvvvvv
      this.videoService.VideoDescription(this.query).subscribe(descripts => {
        this.vidDescription = JSON.parse(JSON.stringify(descripts));
        console.log('getting descriptions');
        console.log(this.vidDescription);
        const vidMinsTemp = new Array(0);
        const showVidTemp = new Array(0);
        // Gets duration and splits the time putting the whole time in minutes
        this.vidDescription.items.forEach(filter => {
          this.temp = filter.contentDetails.duration.split('T')[1].split('H');
          if (this.temp[0].length === 1) {
            vidMinsTemp.push(parseInt(this.temp[1].split('M')[0]) + (parseInt(this.temp[0]) * 60));
          } else {
            vidMinsTemp.push(parseInt(this.temp[0].split("M")[0]));
          }
        });
        this.vidMins = vidMinsTemp;
        console.log(this.vidMins);
      });
    });
    // ^^^^^^^^^^^ Search each search video for it's details to get duration time of each ^^^^^^^^
  }
}
