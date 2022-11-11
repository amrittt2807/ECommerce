import Button from "../Button/Button";
import './shop-card.styles.scss'

const ShopCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" buttonName="Add to card"/>
    </div>
  );
};
export default ShopCard;
