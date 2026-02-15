import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Signup() {

  const { signup, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await signup(email, password)
    navigate("/")
  }

  async function handleGoogleSignup() {
    await loginWithGoogle()
    navigate("/")
  }

  return (
    <form className="card p-4 col-md-4 mx-auto" onSubmit={handleSubmit}>
      <h3 className="mb-3 text-center">Signup</h3>

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
        Signup
      </button>

      <div className="text-center my-3">OR</div>

      <button
        type="button"
        className="btn btn-outline-danger w-100"
        onClick={handleGoogleSignup}
      >
        Continue with Google
      </button>
    </form>
  )
}
