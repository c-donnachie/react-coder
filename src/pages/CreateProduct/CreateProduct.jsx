import s from './CreateProduct.module.css'
import { useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useGetCategories } from '../../hooks/useProducts'
import Input from '../../components/Input/Input'

export default function CreateProduct() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const { categories } = useGetCategories()
    const [loading, setLoading] = useState(false)

    const resetInputs = () => {
        setTitle('')
        setDescription('')
        setPrice('')
        setThumbnail('')
        setCategory('')
        setBrand('')
    }

    const handleCreateProduct = () => {
        setLoading(true)
        const data = {
            title,
            description,
            price,
            thumbnail,
            category,
            brand
        }

        const db = getFirestore()

        const productsCollection = collection(db, 'products')

        addDoc(productsCollection, data)
            .then(({ id }) => {
                console.log(id)
                resetInputs()
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <section className={s.container}>
            <div className={s.card}>
                <label htmlFor="name">Name</label>
                <input
                    className={s.card__input}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="price">Price</label>
                <input
                    className={s.card__input}
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor="description">Description</label>
                <input
                    className={s.card__input}
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    id="category">
                    {
                        categories.map((category, index) => (
                            <option
                                key={index}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >{category}</option>
                        ))
                    }
                </select>

                <label htmlFor="brand">Brand</label>
                <input
                    className={s.card__input}
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)} />

                <label htmlFor="image">Image</label>
                <input
                    className={s.card__input}
                    type="text" name="image"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)} />

                {
                    loading ? (
                        <p>Loading..</p>
                    ) : (
                        <button
                            className={s.card__button}
                            onClick={handleCreateProduct}>
                            Crear
                        </button>
                    )
                }
            </div>
        </section>
    )
}
