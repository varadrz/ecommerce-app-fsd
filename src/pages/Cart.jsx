import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Cart() {

    const navigate = useNavigate()


  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * 83 * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h4>Your cart is empty 🛒</h4>
      </div>
    )
  }

  return (
    <div>
      <h3 className="mb-4">Your Cart</h3>

      <div className="list-group">

        {cart.map(item => (
          <div
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >

            {/* LEFT SIDE */}
            <div className="d-flex align-items-center">

              <img
                src={item.thumbnail}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain"
                }}
              />

              <div className="ms-3">
                <h6 className="mb-1">{item.title}</h6>

                <div className="fw-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0
                  }).format(item.price * 83)}
                </div>
              </div>
            </div>



            {/* RIGHT SIDE (Quantity + Remove) */}
            <div className="d-flex align-items-center gap-3">

              <div className="d-flex align-items-center gap-2">

                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => decreaseQty(item.id)}
                >
                  −
                </button>

                <span className="fw-semibold">{item.quantity}</span>

                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>

              </div>

              <button
                className="btn btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="text-end mt-4">
        <h4>
          Total:{" "}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
          }).format(totalPrice)}
        </h4>

        <button
        className="btn btn-dark mt-3"
        onClick={() => navigate("/checkout")}
        >
        Proceed to Checkout
        </button>

      </div>

    </div>
  )
}
