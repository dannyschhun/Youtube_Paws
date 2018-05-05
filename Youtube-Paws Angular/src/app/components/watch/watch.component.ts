import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }
  vid1Pos: String = " 'translate3d(200px, 200px, 0)'";
  vidLink: String = "wk6gidM3k-8"
  vidUrl: String = "http://www.youtube.com/embed/" + this.vidLink;
  imgUrl: String = "../../../assets/mytubepaws.jpg";

  ngOnInit() {
  }

  

  move(event: MouseEvent) { 
    console.log(event.clientX);
    console.log(event.clientY);
  }
}
