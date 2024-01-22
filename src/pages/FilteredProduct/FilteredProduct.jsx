import {useGetCategories} from '../../hooks/useCategory.jsx'


export default function FilteredProduct() {

  const {categories} = useGetCategories('categories2')
  // const [filters, setFilters] = useState({})

  // const typeFilter = {
  //   category: [listCategories],
  // }

  const listCategories = categories.map((category) => {
    return category.name
  })

  return (
    <div>FilterProduct
      {console.log(typeof(listCategories))}
    </div>
  )
}
