import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await login(email, password)
    navigate("/")
  }

  async function handleGoogleLogin() {
    await loginWithGoogle()
    navigate("/")
  }

  return (
    <form className="card p-4 col-md-4 mx-auto" onSubmit={handleSubmit}>
      <h3 className="mb-3 text-center">Login</h3>

      <input
        className="form-control mb-3"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button className="btn btn-dark w-100">
        Login
      </button>

      <div className="text-center my-3">OR</div>

      <button
        type="button"
        className="btn btn-outline-danger w-100"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </button>
    </form>
  )
}
