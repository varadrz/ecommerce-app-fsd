import { useCart } from "../context/CartContext"

export default function ProductModal({ product, onClose }) {

  const { addToCart } = useCart()

  if (!product) return null

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{product.title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <div className="row">

              <div className="col-md-6">
                <img
                  src={product.thumbnail}
                  className="img-fluid"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>

              <div className="col-md-6">
                <p>{product.description}</p>

                <h4 className="fw-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0
                  }).format(product.price * 83)}
                </h4>

                <button
                  className="btn btn-dark mt-3"
                  onClick={() => {
                    addToCart(product)
                    onClose()
                  }}
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
