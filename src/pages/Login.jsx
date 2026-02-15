import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await login(email, password)
    navigate("/")
  }

  return (
    <form className="card p-4 col-md-4 mx-auto" onSubmit={handleSubmit}>
      <h3 className="mb-3">Login</h3>

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

      <button className="btn btn-dark">Login</button>
    </form>
  )
}
