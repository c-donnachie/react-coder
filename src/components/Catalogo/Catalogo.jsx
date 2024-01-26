import { useGetCategories } from "../../hooks/useCategory"
import { Link } from "react-router-dom"

export default function Catalogo() {

  const { categories } = useGetCategories('categories2')
  
  return (
    <div>
      <h1>Catalogo</h1>
      <ul>

        {
          categories.map((item, index) => (
            <div key={index}>
              <Link to={`/category/${item.id}`}>
                <div key={index}>{item.name}</div>
              </Link>
            </div>
          ))
        }


      </ul>
    </div>
  )
}
