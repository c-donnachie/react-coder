import "./ItemProduct.css"

export default function ItemProduct({ data }) {
  return data.map((product) => (
    <div key={product.id}>
      <img className="item" src={product.images[1]} alt={product.title} />
      <p>{product.title}</p>
      <p>Price: ${product.price}</p>
    </div>
  ))
}
