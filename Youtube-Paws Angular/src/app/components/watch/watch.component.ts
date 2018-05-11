import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PageLayout } from '../../models/PageLayout';
import { Users } from '../../models/Users';
import { UserService } from '../../services/user.service';
import { Time } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})

export class WatchComponent implements OnInit {
  layoutFilled = true;
  clayoutFilled = true;
  categoryColor = '#ffffff';

  public layout = new PageLayout();
  public clayout = new PageLayout();
  user = new Users;
  layoutUser = new Users;
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;
  loaded: boolean = (localStorage.getItem('loaded') !== null) ? true : false;
  choseUser = false;

  public YT: any;

  public video1: any;
  public video2: any;
  public whichVid: any;
  public players: any[];
  public player1: any;
  public player2: any;

  constructor(private userService: UserService, public sanitizer: DomSanitizer, public route: ActivatedRoute, public router: Router, private httpClient: HttpClient) {
    if (!this.loggedIn) {
      this.router.navigate(['login']);
    }
}
  
  vid1Pos = 'transform: translate3d(100px, 0px, 0)';
  vid2Pos = 'transform: translate3d(400px, 0px, 0)';
  searchB = 'transform: translate3d(850px, -100px, 0)';
  vidLink: String = 'wk6gidM3k-8';
  vidUrl: String = 'http://www.youtube.com/embed/' + this.vidLink;
  imgUrl: String = '../../../assets/mytubepaws.jpg';
  newPos: string;
  search: string;

  custom: any;

  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.getSearchVideos();
    this.init();
    this.video1 = localStorage.getItem('vid1');
    this.video2 = localStorage.getItem('vid2');

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
        localStorage.setItem('loaded', 'true');
      };

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
      
  }

  changeVideo() {
    this.YT = null;
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
  }


  getSearchVideos(): void {
    // Get's query from URL and and gets the right API url based on our view settings
    this.whichVid = this.route.snapshot.paramMap.get('vid');
    
    if(this.whichVid == 1){
      localStorage.setItem('vid1', this.route.snapshot.paramMap.get('id'));
    } else if(this.whichVid == 2){
      localStorage.setItem('vid2', this.route.snapshot.paramMap.get('id'));
    }
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
      this.user.userPageLayout[i].background = this.categoryColor;
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

selectUser() {
  this.userService.getUser(this.layoutUser).subscribe(users => {
    this.layoutUser = users;
    this.choseUser = true;
  });
}

  selectLayout() {
    let i = 0;
    this.userService.getUser(this.layoutUser).subscribe(users => {
      this.layoutUser = users;
      console.log(JSON.stringify(users));
      for (i; i < this.layoutUser.userPageLayout.length; i++) {
        if (this.layoutUser.userPageLayout[i].layoutName === this.clayout.layoutName) {
          this.searchB = this.layoutUser.userPageLayout[i].searchBarLoc;
          this.vid1Pos = this.layoutUser.userPageLayout[i].video1Loc;
          this.vid2Pos = this.layoutUser.userPageLayout[i].video2Loc;
          this.categoryColor = this.layoutUser.userPageLayout[i].background;
        }
    }
  });
  }

  move(event: MouseEvent) {
    if (this.custom !== '0') {
      switch (this.custom) {
        case '1': this.newPos = 'transform: translate3d(' + (event.clientX - 138) + 'px, ' + (event.clientY - 360) + 'px, 0)';
        console.log(this.newPos);
          this.searchB = this.newPos;
          break;
        case '2': this.newPos = 'transform: translate3d(' + (event.clientX - 720) + 'px, ' + (event.clientY - 360) + 'px, 0)';
          this.vid1Pos = this.newPos;
          break;
        case '3': this.newPos = 'transform: translate3d(' + (event.clientX - 720) + 'px, ' + (event.clientY - 720) + 'px, 0)';
          this.vid2Pos = this.newPos;
          break;
      }

      console.log(event.clientX + '' + event.clientY);
    }
  }

  searched() {
    this.router.navigate(['aftermath/' + this.search]);
  }
}
