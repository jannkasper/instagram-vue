import { publicFetch } from "./fetcher";

export async function fetchState(fetchUrl, params) {
    return publicFetch.get(fetchUrl, { params }).then(response => {
        if (response.data.error) {
            // Router.push('/404')
        } else {
            return response.data
        }
    })
}

export async function fetchExtendState(object, url, params) {
        return publicFetch.get(url, { params }).then( response => {
            object.timelineMedia = { pageInfo: response.data.pageInfo, mediaArray: object.timelineMedia.mediaArray.concat(response.data.mediaArray) }
        })
}