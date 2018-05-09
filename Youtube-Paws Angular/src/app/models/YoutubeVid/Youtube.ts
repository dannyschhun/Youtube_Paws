import { PageInfo } from "./PageInfo";
import { Item } from "./Item";

export class Youtube {
    etag: String;
    kind: String;
    nextPageToken: String;
    regionCode: String;
    pageInfo: PageInfo;
    items: Item[];
}