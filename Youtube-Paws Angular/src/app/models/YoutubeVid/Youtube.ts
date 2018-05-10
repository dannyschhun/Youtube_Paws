import { PageInfo } from "./PageInfo";
import { Item } from "./Item";

export class Youtube {
    etag: string;
    kind: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}