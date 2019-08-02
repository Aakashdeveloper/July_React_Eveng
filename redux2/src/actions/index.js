const baseUrl= "http://localhost:8900"

export function latestNews(){
    const output = fetch(`${baseUrl}/articles?_end=3`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_LATEST_NEWS',
        payload:output
    }
}


export function articleNews(){
    const output = fetch(`${baseUrl}/articles?_start=3&_end=10`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_ARTICLE_NEWS',
        payload:output
    }
}

export function latestGallery(){
    const output = fetch(`${baseUrl}/galleries?_limit=2`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_LATEST_GALLERY',
        payload:output
    }
}

export function selectedNews(){
    const output = fetch(`${baseUrl}/galleries?_limit=2`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_LATEST_GALLERY',
        payload:output
    }
}

export function clearSelectedNews(){
    const output = fetch(`${baseUrl}/galleries?_limit=2`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_LATEST_GALLERY',
        payload:output
    }
}