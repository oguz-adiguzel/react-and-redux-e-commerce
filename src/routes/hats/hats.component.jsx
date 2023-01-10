import ProductCard from '../../components/product-card/product-card.component';
import './hats.style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { totalCalculater } from '../../features/product/productSlice';

function Hats() {
    const { productItems, basket } = useSelector((store) => store.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalCalculater())
    }, [basket]);

    return (<>
        <h2 className='shop-title'>HATS</h2>
        <div className='product-container'>
            {
                productItems.map((product) => (
                    product.type === 'Hat' && <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </>);
}

export default Hats;