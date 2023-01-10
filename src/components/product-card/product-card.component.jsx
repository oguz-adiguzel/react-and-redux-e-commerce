import { useDispatch } from 'react-redux';
import { addBasket } from '../../features/product/productSlice';
import './product-card.style.scss';


function ProductCard({ product }) {

    const dispatch = useDispatch()

    return (<>
        <div className="product-card">
            <div className='product-overlay'>
                <button onClick={() => dispatch(addBasket(product.id))} className='add-basket-button'>SEPETE EKLE</button>
            </div>
            <img className="product-image" src={product.imgUrl} />
            <span className='product-info'>
                <span>{product.name}</span>
                <span>{product.price} $</span>
            </span>
        </div>
    </>);
}

export default ProductCard;