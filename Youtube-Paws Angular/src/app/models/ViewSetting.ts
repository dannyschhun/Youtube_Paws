import { Tags } from './Tags';
import { Category } from './Category';

export class ViewSettings {
    id: number;
    viewSettingsName: string;
    lengthMin: number;
    lengthMax: number;
    subscriberCountMin: number;
    subscriberCountMax: number;
    uploadTimeMin: string;
    uploadTimeMax: string;
    ratingMin: number;
    ratingMax: number;
    settingTags: Tags[];
    excludeTags: Tags[];
    categories: Category[];
}
