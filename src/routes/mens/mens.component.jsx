import ProductCard from '../../components/product-card/product-card.component';
import './mens.style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { totalCalculater } from '../../features/product/productSlice';

function Mens() {
    const { productItems, basket } = useSelector((store) => store.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalCalculater())
    }, [basket]);

    return (<>
      <h2 className='shop-title'>MENS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Men' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </>);
}

export default Mens;