export const adaptApiData = (apiData) => {
  const products = apiData && apiData.products ? apiData.products : []

  const adaptedData = products.map((product) => ({
    id: product.id,
    nombre: product.title,
    price: product.price,
    image: product.thumbnail,
  }))

  return adaptedData
}
