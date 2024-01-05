import { createContext, useReducer, useEffect } from 'react'
const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        loading: false,
        error: null
    }
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            }
        case "LOGIN_SUCCESS":
            console.log(action.payload)
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider value={{
            user: state.user,
            loading: state.login,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}