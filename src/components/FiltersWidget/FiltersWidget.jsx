import { useGetCategories } from "../../hooks/useCategory"
import s from './FiltersWidget.module.css'
import { useState } from "react"

export default function FiltersWidget({ category }) {

    const { categories } = useGetCategories('categories2')
    const [openCategories, setOpenCategories] = useState(false)

    const handleOpenCaregories = () => {
        setOpenCategories(!openCategories)
    }

    const [selectedCategory, setSelectedCategory] = useState(category)

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };



    return (
        <section className={s.container}>

            <div className={s.card}>
                <button className={s.dropdown__button} onClick={handleOpenCaregories}>
                    Categorias:
                    <div>{category}</div>

                </button>

                <div className={`${s.dropdown__container} ${openCategories && s.dropdown__container_active}`}>

                    {
                        categories.map((item, index) => (
                            <label key={index} className={s.subCard} >
                                {item.name}
                                <input
                                    type="radio"
                                    name="options"
                                    value={item.name}
                                    checked={category === item.name}
                                    onChange={handleCategoryChange}
                                />

                            </label>

                        ))
                    }
                </div>


            </div>
        </section>

    )
}
