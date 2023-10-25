import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const {id, price, name, image, discount } = productData;

  return (
    <div>
      <div className="card relative bg-green-100 shadow-xl">
        {discount && (
          <p className="absolute ml-5 mt-5 bg-yellow-400 p-2 rounded-md font-bold text-blue-950">
            {discount}% OFF{" "}
          </p>
        )}
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">${price} </h2>
          <p>{name} </p>
          <div className="card-actions ">
            <Link to= {`/productDetails/${id}`}>
              
              <button className="btn font-semibold text-lg bg-gradient-to-r from-cyan-50 to-blue-700 border-none">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object,
};

export default ProductCard;
