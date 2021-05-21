import { publicFetch } from "./fetcher";

export function fetchImage(imageUrl) {
    if (!imageUrl) {
        return;
    }
    return publicFetch.get("/image/?url=" + escape(imageUrl)).then(response => {
        return response.data;
    })
}
