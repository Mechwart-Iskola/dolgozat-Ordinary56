import { Product } from "../../types";
type ProductCardProps = {
  product?: Product;
};
const ProductCard = ({product} : ProductCardProps) => {
  if(product === undefined || product === null) return <></>
  return (
    <div className="product-info">
        <img className="product-image" src={product?.image} alt="Termék képe" title="Termék" />
      <div className="product-details">
        <p>Id: {product?.id}</p>
        <p>Name: {product?.name}</p>
        <p>Price: {product?.price}</p>
        <p>Category: {product?.category}</p>
      </div>

    </div>
  )
}

export default ProductCard;