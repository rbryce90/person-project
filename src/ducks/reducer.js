const INITIAL_STATE = {
    user: '',
    admin: false,
    user_id: ''

}

const LOGIN_USER = 'LOGIN_USER';

export default function reducer( state = INITIAL_STATE,  action ){
    switch (action.type){
        case LOGIN_USER:
            console.log(action.payload)
            return Object.assign({}, state,{user: action.payload.username, admin: action.payload.admin, user_id: action.payload.user_id});
        default: 
            return state;
    }
}

export function userFn(userObj){
    return {
        type: LOGIN_USER,
        payload: userObj
    };
};

// export function adminFn(admin){
//     return {
//         type: UPDATE_ADMIN,
//         payload: admin
//     };
// };
