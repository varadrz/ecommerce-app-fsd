import { useCart } from "../context/CartContext"

export default function Checkout() {

  const { cart } = useCart()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * 83 * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h4>No items to checkout</h4>
      </div>
    )
  }

  return (
    <div className="row">

      {/* LEFT SIDE - FORM */}
      <div className="col-md-7">
        <h3 className="mb-3">Shipping Details</h3>

        <form className="card p-4 shadow-sm">

          <input
            className="form-control mb-3"
            placeholder="Full Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Address"
          />

          <input
            className="form-control mb-3"
            placeholder="City"
          />

          <input
            className="form-control mb-3"
            placeholder="Pincode"
          />

          <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => alert("Order placed successfully! (Mock Checkout)")}
          >
            Place Order
          </button>

        </form>
      </div>

      {/* RIGHT SIDE - ORDER SUMMARY */}
      <div className="col-md-5">
        <h3 className="mb-3">Order Summary</h3>

        <div className="card p-3 shadow-sm">

          {cart.map(item => (
            <div
              key={item.id}
              className="d-flex justify-content-between mb-2"
            >
              <span>
                {item.title} x {item.quantity}
              </span>

              <span>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0
                }).format(item.price * 83 * item.quantity)}
              </span>
            </div>
          ))}

          <hr />

          <h5 className="text-end">
            Total:{" "}
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0
            }).format(totalPrice)}
          </h5>

        </div>
      </div>

    </div>
  )
}
