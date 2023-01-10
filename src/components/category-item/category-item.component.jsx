import { useNavigate } from "react-router-dom";
import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            if (title === 'hats') {
                navigate('hats')
            }
            if (title === 'jackets') {
                navigate('jackets')
            }
            if (title === 'sneakers') {
                navigate('sneakers')
            }
            if (title === 'womens') {
                navigate('womens')
            }
            if (title === 'mens') {
                navigate('mens')
            }
        }} className="kategori-konteynırı" >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} ></div>
            <div className="kategori-gövde-konteynırı">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div >
    )

}


export default CategoryItem;