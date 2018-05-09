import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  public YT: any;
  public video1: any;
  public video2: any;
  public players: any[];
  public player1: any;
  public player2: any;

  constructor(public sanitizer: DomSanitizer) { }
  vid1Pos: String = 'transform: translate3d(400px, 200px, 0)';
  vid2Pos: String = 'transform: translate3d(1000px, -110px, 0)';
  searchB: String = 'transform: translate3d(850px, -100px, 0)';
  vidLink: String = 'wk6gidM3k-8';
  vidUrl: String = 'http://www.youtube.com/embed/' + this.vidLink;
  imgUrl: String = '../../../assets/mytubepaws.jpg';
  newPos: String;
  custom: any;

  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();
    this.video1 = '1cH2cerUpMQ'; // video id
    this.video2 = '3OZPgzwe1eY';

    window['onYouTubeIframeAPIReady'] = () => {
      this.YT = window['YT'];
      this.player1 = new window['YT'].Player('player1', {
        videoId: this.video1,
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this)
        }
      }),
      this.player2 = new window['YT'].Player('player2', {
        videoId: this.video2,
        events: {
          'onStateChange': this.onPlayerStateChange2.bind(this),
          'onError': this.onPlayerError2.bind(this)
        }
      });
    };
  }

  onPlayerStateChange(event) {
    console.log(event);
    console.log(this.player1.getCurrentTime());
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() === 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player1.getDuration() - this.player1.getCurrentTime() !== 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }

  onPlayerStateChange2(event) {
    console.log(event);
    console.log(this.player2.getCurrentTime());
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime2() === 0) {
          console.log('started ' + this.cleanTime2());
        } else {
          console.log('playing ' + this.cleanTime2());
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player2.getDuration() - this.player2.getCurrentTime() !== 0) {
          console.log('paused' + ' @ ' + this.cleanTime2());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }
  // utility
  cleanTime() {
    return Math.round(this.player1.getCurrentTime());
  }

  cleanTime2() {
    return Math.round(this.player1.getCurrentTime());
  }

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video1);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }

  onPlayerError2(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video2);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }


  move(event: MouseEvent) {
    if (this.custom !== '0') {
      switch (this.custom) {
        case '1': this.newPos = 'transform: translate3d(' + (event.clientX - 138) + 'px, ' + (event.clientY - 230) + 'px, 0)';
          this.searchB = this.newPos;
          break;
        case '2': this.newPos = 'transform: translate3d(' + (event.clientX - 278) + 'px, ' + (event.clientY - 400) + 'px, 0)';
          this.vid1Pos = this.newPos;
          break;
        case '3': this.newPos = 'transform: translate3d(' + (event.clientX - 278) + 'px, ' + (event.clientY - 720) + 'px, 0)';
          this.vid2Pos = this.newPos;
          break;
      }
    }
  }
}
