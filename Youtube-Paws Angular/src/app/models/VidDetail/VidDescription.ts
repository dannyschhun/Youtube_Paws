import { PageInfo } from "./PageInfo";
import { Item } from "./Item";

export class VidDescription {
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: Item[];
}