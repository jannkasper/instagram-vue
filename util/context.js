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

export async function fetchExtendState(context, setContext, url, params) {
        await publicFetch.get(url, { params }).then( response => {
            setContext({
                ...context,
                timelineMedia: { pageInfo: response.data.pageInfo, mediaArray: context.timelineMedia.mediaArray.concat(response.data.mediaArray) }
            })
        })
}