export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST_NEWS':
            return{...state, latest:action.payload}
        case 'GET_ARTICLE_NEWS':
            return{...state, other:action.payload}
        case'POST_FORM':
            return{...state,data:[]}
        default:
            return state;
    }
}