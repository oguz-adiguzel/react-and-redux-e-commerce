import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { totalCalculater } from '../../features/product/productSlice';

function Shop() {

    const { productItems,basket } = useSelector((store) => store.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalCalculater())
    }, [basket]);

    return (<>
        <h2 className='shop-title'>JACKETS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Jacket' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>

        <h2 className='shop-title'>WOMENS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Women' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>

        <h2 className='shop-title'>MENS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Men' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>

        <h2 className='shop-title'>HATS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Hat' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>

        <h2 className='shop-title'>SNEAKERS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Sneaker' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </>);
}

export default Shop;