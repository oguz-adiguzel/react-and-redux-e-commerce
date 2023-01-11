import { useDispatch, useSelector } from 'react-redux';
import './basket.style.scss';
import { removeItem, removeBasket, totalCalculater } from '../../features/product/productSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Basket() {

    const { basket, amount, total } = useSelector((store) => store.product)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const confirm = () => {
        alert('Alışveriş Tamamlandı');
        dispatch(removeBasket());
        navigate('/')
    }

    useEffect(() => {
        dispatch(totalCalculater())
    }, [basket]);

    return (<>

        <div className='basket-container'>
            <div className='title-container'>
                <h1 className='basket-title'>Sepetim</h1>
                <h1 className='basket-amount'>{amount}</h1>
            </div>
            {
                amount === 0 && <div className='empty-basket'>
                    <h1>Sepette Ürün Bulunmamaktadır</h1>
                    <h4>Lütfen Sepete Ürün Ekleyiniz</h4>
                </div>
            }
            <div className='product-basket-container'>
                {
                    basket.map((item) => (
                        <div className='product-item'>
                            <img className='basket-page-img' src={item.imgUrl} />
                            <div className='product-info-container'>
                                <p className='basket-product-name'>{item.name}</p>
                                <p className='basket-product-price'>${item.price}</p>
                                <p>{item.type}</p>
                            </div>
                            <button onClick={() => dispatch(removeItem(item.id))} className='basket-remove-btn'>Kaldır</button>
                        </div>
                    ))
                }
            </div>
            {
                amount > 0 && <div className='total-container'>
                    <div>
                        <span className='total-info'>Toplam Sepet Tutarı : </span><span className='total'>${total}</span>
                    </div>
                    <button onClick={confirm} className='complate-btn'>Alışverişi Tamamla</button>
                </div>
            }

        </div>

    </>);
}

export default Basket;