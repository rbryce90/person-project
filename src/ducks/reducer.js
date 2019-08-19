const INITIAL_STATE = {
  user: null
};

const LOGIN_USER = "LOGIN_USER";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log("action.payload ===>", action.payload);
      return Object.assign({}, state, {
        user: action.payload[0]
      });
    default:
      return state;
  }
}

export function userFn(userObj) {
  console.log("userFn brings in ===>", userObj[0]);
  return {
    type: LOGIN_USER,
    payload: userObj
  };
}
