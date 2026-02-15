
export default function ProductCard({ product, onView }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.thumbnail}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />


      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>

        {/*Displays price in INR with currency symbol and no decimal places*/}
        <p className="fw-bold mt-auto">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
          }).format(product.price * 91)}
        </p>

        
        <button
          className="btn btn-dark w-100"
          onClick={() => onView(product)}
        >
          View Product
        </button>

      </div>
    </div>
  )
}
