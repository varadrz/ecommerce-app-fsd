import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../services/api"

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSingleProduct(id)
      .then(data => setProduct(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border"></div>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.thumbnail}
          className="img-fluid"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>

      <div className="col-md-6">
        <h3>{product.title}</h3>
        <p className="text-muted">{product.description}</p>

        <h4 className="fw-bold">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
          }).format(product.price * 83)}
        </h4>

        <button className="btn btn-dark mt-3">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
