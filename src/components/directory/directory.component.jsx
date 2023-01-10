import CategoryItem from "../category-item/category-item.component";
import './directory.style.scss';

const Directory = ({ kategoriler }) => {
    return (
        <div className="dizin-konteynırı">
            {
                kategoriler.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))
            }
        </div>
    )
}

export default Directory;