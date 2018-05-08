import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }
  vid1Pos: String = "transform: translate3d(400px, 200px, 0)";
  vid2Pos: String = "transform: translate3d(1000px, -110px, 0)";
  searchB: String = "transform: translate3d(850px, -100px, 0)";
  vidLink: String = "wk6gidM3k-8"
  vidUrl: String = "http://www.youtube.com/embed/" + this.vidLink;
  imgUrl: String = "../../../assets/mytubepaws.jpg";
  newPos: String
  custom: any;
  ngOnInit() {
  }



  move(event: MouseEvent) {
    if (this.custom != "0") {
      switch (this.custom) {
        case "1": this.newPos = "transform: translate3d(" + (event.clientX-138) + "px, " + (event.clientY - 230) + "px, 0)"; 
          this.searchB = this.newPos;
          break;
        case "2": this.newPos = "transform: translate3d(" + (event.clientX-278) + "px, " + (event.clientY-400) + "px, 0)";
          this.vid1Pos = this.newPos;
          break;
        case "3": this.newPos = "transform: translate3d(" + (event.clientX-278) + "px, " + (event.clientY - 720) + "px, 0)";
          this.vid2Pos = this.newPos;
          break;
      }
    }
  }
}
