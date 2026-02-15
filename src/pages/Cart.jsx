import { useCart } from "../context/CartContext"

export default function Cart() {

  const { cart, removeFromCart } = useCart()

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
            className="list-group-item d-flex align-items-center"
          >

            <img
              src={item.thumbnail}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain"
              }}
            />

            <div className="ms-3 flex-grow-1">
              <h6 className="mb-1">{item.title}</h6>

              <small>Qty: {item.quantity}</small>

              <div className="fw-bold">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0
                }).format(item.price * 83)}
              </div>
            </div>

            <button
              className="btn btn-outline-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

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
      </div>

    </div>
  )
}
