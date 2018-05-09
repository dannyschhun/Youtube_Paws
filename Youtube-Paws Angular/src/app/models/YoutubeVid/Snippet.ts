import { Thumbnails } from './Thumbnails';
import { Time } from '@angular/common';

export class Snippet {
    publishedAt: Time
    channelId: String;
    title: String;
    description: String;
    thumbnails: Thumbnails[];
    channelTitle: String;
    liveBroadcastContent: String;
}