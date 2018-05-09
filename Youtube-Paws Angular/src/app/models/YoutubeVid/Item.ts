import { Snippet } from './Snippet';
import { Id } from './Id';

export class Item {
    kind: String;
    etag: String;
    id: Id;
    snippet: Snippet;
}