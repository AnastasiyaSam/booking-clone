import ".login.css"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev, [e.target.id]: e.target.value
        }))
    }

    const handleClick = async e =>{
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
    }
    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="userName" className="lInput" onChange={handleChange} />
                <input type="password" placeholder="password" id="password" className="lInput" onChange={handleChange} />
                <button onClick={handleClick} className="lButton">Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login