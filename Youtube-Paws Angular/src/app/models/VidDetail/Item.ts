import { contentDetails } from "./contentDetails";

export class Item {
    kind: string;
    etag: string;
    id: string;
    contentDetails: contentDetails;
}