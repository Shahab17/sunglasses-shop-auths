import PropTypes from "prop-types";

const ProductCard = ({ productData }) => {
  const { price, name, image, discount } = productData;

  return (
    <div>
      <div className="card relative bg-base-300 shadow-xl">
       { discount &&
         <p className="absolute ml-5 mt-5 bg-yellow-400 p-2 rounded-md font-bold text-blue-950">{discount}% </p>
       }
        <figure>
          <img
            src= {image}
          
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">${price} </h2>
          <p>{name} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
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
