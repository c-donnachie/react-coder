export const adaptApiData = (product) => {
  return {
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.thumbnail,
    category: product.category,
    brand: product.brand,
  };
};