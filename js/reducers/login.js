
import { INIT } from '../store/types';

const initState = {
    loginIn : true,
    user : "aaa"
}

export default function login(state = initState,action ){
    switch (action.type) {
        case "INIT":
            console.log("init");
            return {
                ...state,
                user:"bbb"
            }
        default :
            return state;
        
    }
}
