
import { INIT } from '../store/types';

const initState = {
    loginIn : true
}

export default function login(state = initState,action ){
    switch (action.type) {
        case "INIT":
            console.log("init");
            return {
                ...state,
                loginIn:true
            }
        default :
            return state;
        
    }
}
