import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetCollection } from '../../hooks/useProducts.jsx';
import FiltersWidget from '../../components/FiltersWidget/FiltersWidget.jsx';
import s from './FilteredProducts.module.css';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';
import PrimaryLayout from '../../layouts/PrimaryLayout.jsx';
import LoadingGif from '../../components/LoadingGif/LoadingGif.jsx';

const FilteredProduct = () => {
  const { productsData, loading } = useGetCollection('products');
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const category = params.get('category');
  const brand = params.get('brand');

  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {

    if (productsData && productsData.length > 0) {

      const productosFiltrados = productsData.filter((product) => {

        const categoriaCoincide = !category || category === product.category;
        const marcaCoincide = !brand || brand === product.brand;

        return categoriaCoincide && marcaCoincide;
      });

      setProductosFiltrados(productosFiltrados);
    }
  }, [category, brand, productsData]);

  // Brands

  const brands = productosFiltrados.map((product) => product.brand);
  const uniqueBrands = [...new Set(brands)];
  


  const withoutResults =
    loading ? <LoadingGif /> :
      <div className={s.withoutResults}>
        <p>No se encontraron resultados</p>
      </div>

  return (
    <PrimaryLayout>
      {/* <FiltersWidget brands={uniqueBrands} /> */}
      <div className={s.container}>

        {productosFiltrados.length > 0 ? (
          <ItemListContainer productsData={productosFiltrados} loading={loading} />
        ) : (
          withoutResults
        )}

      </div>
    </PrimaryLayout>
  );
};

export default FilteredProduct;
