import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Auth() {

  const { login, signup, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    if (isLogin) {
      await login(email, password)
    } else {
      await signup(email, password)
    }

    navigate("/")
  }

  async function handleGoogle() {
    await loginWithGoogle()
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <form
        className="card p-4 col-md-4 mx-auto shadow-sm"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-3">
          {isLogin ? "Login" : "Signup"}
        </h3>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-dark w-100">
          {isLogin ? "Login" : "Signup"}
        </button>

        <div className="text-center my-3">OR</div>

        <button
          type="button"
          className="btn btn-outline-danger w-100"
          onClick={handleGoogle}
        >
          Continue with Google
        </button>

        <div className="text-center mt-3">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                style={{ cursor: "pointer", fontWeight: "600" }}
                onClick={() => setIsLogin(false)}
              >
                Signup
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                style={{ cursor: "pointer", fontWeight: "600" }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </div>

      </form>
    </div>
  )
}
