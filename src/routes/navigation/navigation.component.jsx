import { Fragment, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ReactComponent as BasketLogo } from '../../assets/basket.svg';
import './navigation.style.scss'
import { useDispatch, useSelector } from "react-redux";
import { amountCalculater, removeBasket, removeItem, totalCalculater } from '../../features/product/productSlice';


const Navigation = () => {

    const { basket, total, amount } = useSelector((store) => store.product)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(amountCalculater())
    }, [basket]);

    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">SHOP</Link>
                    <Link to='/sign-in' className="nav-link">SIGN IN</Link>
                    <p className="amount">{amount}</p>
                    <div class="dropdown">
                        <BasketLogo className="basket-logo" />
                        <div class="dropdown-content">
                            {
                                basket.map((item) => (
                                    <a href="#" className="basket-item">
                                        <img className="basket-img" src={item.imgUrl}></img>
                                        {item.name}
                                        <p>${item.price}</p>
                                        <button onClick={() => dispatch(removeItem(item.id))} className="delete-item-button">Sil</button>
                                    </a>
                                ))
                            }
                            <h4>Total : {total}$</h4>
                            <button className="delete-basket-button" onClick={() => dispatch(removeBasket())}>Sepeti Temizle</button>
                            <button onClick={() => navigate('basket')} className="basket-button">Sepete Git</button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;