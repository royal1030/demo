import { createContext, useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  //   const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  // actions..
  const userReducer = (state, action) => {
    switch (action.type) {
      //   case "CHANGE_USER":
      //     return {
      //       user: action.payload,
      //       chatId:
      //         currentUser.uid > action.payload.uid
      //           ? currentUser.uid + action.payload.uid
      //           : action.payload.uid + currentUser.uid,
      //     };
      case "RESET_USER":
        return {
          user: {},
          chatId: "null",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{ data: state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
