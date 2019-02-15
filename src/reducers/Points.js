
const initState = {number : 5}
// {
//     type : "ADD" ,
//     number : 5
// }
const Points = (state =initState , action)=> {
    switch (action.type) {
        case "ADD":
            return {...state , number : state.number + 1}
            break;
        
        default:
            return state
            break;
    }
}
export default Points
