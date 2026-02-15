export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?")

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const data = await res.json()
  return data.products
}

export async function getSingleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  return res.json()
}
