import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PageLayout } from '../../models/PageLayout';
import { Users } from '../../models/Users';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  layoutFilled = true;
  clayoutFilled = true;

  public layout = new PageLayout();
  public clayout = new PageLayout();
  user = new Users;
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  public YT: any;
  public video1: any;
  public video2: any;
  public players: any[];
  public player1: any;
  public player2: any;

  constructor(private userService: UserService, public sanitizer: DomSanitizer) { }
  vid1Pos = 'transform: translate3d(400px, 200px, 0)';
  vid2Pos = 'transform: translate3d(1000px, -110px, 0)';
  searchB = 'transform: translate3d(850px, -100px, 0)';
  vidLink: String = 'wk6gidM3k-8';
  vidUrl: String = 'http://www.youtube.com/embed/' + this.vidLink;
  imgUrl: String = '../../../assets/mytubepaws.jpg';
  newPos: string;
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
    this.video2 = '1cH2cerUpMQ';

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

  chooseLayout() {
    let i = 0;

    if (this.layout.layoutName === null) {
      this.layoutFilled = false;
    } else {

      this.layoutFilled = true;

    if (this.loggedIn) {
      this.user = JSON.parse(localStorage.getItem('user'));
    for (i; i < this.user.userPageLayout.length; i++) {
      }
      this.user.userPageLayout[i] = new PageLayout();
      this.user.userPageLayout[i].layoutName = this.layout.layoutName;
      this.user.userPageLayout[i].searchBarLoc = this.searchB;
      this.user.userPageLayout[i].video1Loc = this.vid1Pos;
      this.user.userPageLayout[i].video2Loc = this.vid2Pos;

      this.userService.addPageLayout(this.user.userPageLayout[i]).subscribe(layout => {
          console.log(layout);
          this.user.userPageLayout[i].id = layout.id;
          console.log(this.user.userPageLayout[i]);
          this.userService.updateUser(this.user).subscribe(users => {
            console.log(users);
          });
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(this.user));
      });
    }
  }
}

    selectLayout() {
      let i = 0;
      if (this.loggedIn) {
        this.user = JSON.parse(localStorage.getItem('user'));
        for (i; i < this.user.userPageLayout.length; i++) {
          if (this.user.userPageLayout[i].layoutName === this.clayout.layoutName) {
            this.searchB = this.user.userPageLayout[i].searchBarLoc;
            this.vid1Pos = this.user.userPageLayout[i].video1Loc;
            this.vid2Pos = this.user.userPageLayout[i].video2Loc;
          }
      }
    }
  }

  move(event: MouseEvent) {
    if (this.custom !== '0') {
      switch (this.custom) {
        case '1': this.newPos = 'transform: translate3d(' + (event.clientX - 138) + 'px, ' + (event.clientY - 230) + 'px, 0)';
        console.log(this.newPos);
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
