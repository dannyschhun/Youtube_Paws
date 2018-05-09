import { Thumbnails } from './Thumbnails';
import { Time } from '@angular/common';

export class Snippet {
    publishedAt: Time
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails[];
    channelTitle: string;
    liveBroadcastContent: string;
}