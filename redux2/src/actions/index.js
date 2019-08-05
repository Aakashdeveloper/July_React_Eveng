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

export function selectedNews(id){
    const output = fetch(`${baseUrl}/articles?id=${id}`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}

export function clearSelectedNews(){

    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}

export function handleLikes(array, id){
    const output = fetch(`${baseUrl}/articles/${id}`,{
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({likes:array})
    })
    .then((response) => response.json())

    return{
        type:'HANDLE_LIKES',
        payload:output
    }
}