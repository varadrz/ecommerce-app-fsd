import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {

  const { cart } = useCart()
  const { user, logout } = useAuth()

  // total quantity count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* BRAND */}
        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>

        {/* RIGHT SIDE */}
        <div className="ms-auto d-flex align-items-center gap-2">

          {/* CART BUTTON */}
          <Link to="/cart" className="btn btn-outline-light position-relative">
            🛒 Cart

            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </Link>

          {/* AUTH BUTTON */}
          {user ? (
            <button
              onClick={logout}
              className="btn btn-outline-warning"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
          )}

        </div>

      </div>
    </nav>
  )
}
