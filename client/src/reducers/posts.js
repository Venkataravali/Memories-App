export default (posts = [],action)=>{
    //it accepts both action and as well as state 
    // if(action.type === 'CREATE'){
    //     return 
    // }
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts,action.payload];
        default:
            return posts;
    }

}