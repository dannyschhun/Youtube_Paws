import { Component } from '@angular/core';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
}
