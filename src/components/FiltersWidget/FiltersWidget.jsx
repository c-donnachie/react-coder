import { useGetCategories } from "../../hooks/useCategory"
import s from './FiltersWidget.module.css'
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';

export default function FiltersWidget({ category, brands }) {

    const location = useLocation();
    const navigate = useNavigate();

    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const brand = params.get('brand');

    const handleNavigation = (marca) => {


            const newSearch = `${location.search ? location.search + '&' : '?'}brand=${marca}`;
            navigate(newSearch);

    };

    // console.log("search:", search)

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


            {
                brands.map((marca, index) => (

                    <div key={index}>
                        <button onClick={() => handleNavigation(marca)}>
                            <p>{marca}</p>
                        </button>
                    </div>

                ))
            }

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
