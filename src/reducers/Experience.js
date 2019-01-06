
const initState = {nb:0 , gmc : 0}

const Experience = (state =initState , action)=> {
    switch (action.type) {
        case "ZID2":
            return {
                ...state,
                nb : state.nb + 1,
                gmc : 500
            }
            break;
        case "ZID2" : 
            return {
                ...state ,
                nb : action.zid  , 
                
            }
        case "NA9ES" : 
            return {
                ...state ,
                nb : state.nb - action.xxx  , 

            }
        default:
        return state
            break;
    }
}
export default Experience
