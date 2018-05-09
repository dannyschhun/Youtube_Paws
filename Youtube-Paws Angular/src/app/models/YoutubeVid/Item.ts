import { Snippet } from './Snippet';
import { Id } from './Id';

export class Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}
