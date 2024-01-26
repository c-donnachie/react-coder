import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetCollection } from '../../hooks/useProducts.jsx';
import FiltersWidget from '../../components/FiltersWidget/FiltersWidget.jsx';
import s from './FilteredProducts.module.css';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';

const FilteredProduct = () => {
  const { productsData, loading } = useGetCollection('products');
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // Obtén múltiples parámetros de la URL
  const category = params.get('category');
  const brand = params.get('brand');

  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    // Verifica si tienes datos de productos antes de aplicar los filtros
    if (productsData && productsData.length > 0) {
      // Aplica los filtros basados en los parámetros de la URL
      const productosFiltrados = productsData.filter((product) => {
        // Verifica si la categoría y marca coinciden
        const categoriaCoincide = !category || category === product.category;
        const marcaCoincide = !brand || brand === product.brand;

        // Retorna true solo si ambos criterios coinciden
        return categoriaCoincide && marcaCoincide;
      });

      // Actualiza el estado con los productos filtrados
      setProductosFiltrados(productosFiltrados);
    }
  }, [category, brand, productsData]);

  return (
    <div className={s.container}>
      {/* <FiltersWidget category={category} /> */}

      {productosFiltrados.length > 0 ? (
        <ItemListContainer productsData={productosFiltrados} loading={loading} />
      ) : (
        <p>No se encontraron resultados</p>
      )}



    </div>
  );
};

export default FilteredProduct;
