import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../services/api"
import ProductModal from "../components/ProductModal"


export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)


  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-dark"></div>
      </div>
    )
  }

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-6 col-lg-3 mb-4">
          <ProductCard
          product={product}
          onView={setSelectedProduct}
        />

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

        )}


        </div>
      ))}
    </div>
  )
}
