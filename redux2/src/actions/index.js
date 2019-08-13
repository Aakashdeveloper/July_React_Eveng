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



export function postData(fname, lname){
    console.log('>>>>'+fname+'lname'+lname)
    var random = Math.floor(Math.random()*1000);
    let data = {
        id:random ,
        title:fname,
       body: lname,
       category: "shows",
        img: "7.jpg",
        date: "21/21/1944",
        author: "Meredith Cash",
        views: 237,
        likes: [
        12,
        9
      ]
    }
    fetch(`${baseUrl}/articles/`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((response) => response.json())

    return{
        type:'POST_FORM',
        payload:''
    }
}

