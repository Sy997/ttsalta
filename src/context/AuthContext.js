import { createContext, useState, useContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { Navigate, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../firebase";
// const INITIAL_STATE = {
//   currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.currentUser));
//   }, [state.currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export const UserContext = createContext({})

export const useUserContext = () => {return useContext(UserContext)}

export const UserContextProvider = ({ children }) => {
  const Navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    const displa = onAuthStateChanged(auth,(resp) => {
      if(resp) setUser(resp)
      else {
        setUser(null)
      }
    })
    return displa
  },[])
  

  const SigninUser = (email, passowrd) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, passowrd)
    .then((resp) => {
      console.log(resp)
      Navigate('/')
    })
    .catch((err) => 
      alert("ban sai ten hoac mat khau!!!", err.code)
    )
    .finally(() => setLoading(false))
  }

  const contextValue = {
    user,
    loading,
    error,
    SigninUser,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

