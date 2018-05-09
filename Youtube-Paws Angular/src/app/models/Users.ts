import { ViewSettings } from './ViewSetting';
import { PageLayout } from './PageLayout';
import { History } from './History';
import { Playlist } from './Playlist';

export class Users {
    id: number;
    username: string;
    password: string;
    rank: number;
    userViewSettings: ViewSettings[];
    userPageLayout: PageLayout[];
    history: History[];
    playlist: History[];
}
