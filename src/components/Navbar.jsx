import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Navbar() {

  const { cart } = useCart()

  // total quantity count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>

        <div className="ms-auto">

          <Link to="/cart" className="btn btn-outline-light position-relative">
            🛒 Cart

            {totalItems > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {totalItems}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  )
}
