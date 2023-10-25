import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DetailCard = ({ detail }) => {
  const { name, price, description, image } = detail || {};

  return (
    <div>
      <div className="   flex  items-center rounded-xl bg-yellow-50   shadow-md">
        <div className="   bg-white    rounded-xl ">
          <img src={image} className="      " />
        </div>
        <div className="p-6">
          <h6 className="block mb-4  lg:text-2xl   font-semibold   ">
            {name}
          </h6>
          <h4 className="block mb-2  lg:text-xl     text-blue-gray-900">
            {description}
          </h4>
          <p className="block mb-8 text-lg  lg:text-3xl font-bold ">
            ${price}
          </p>
          <Link to='/products'>
             
            <button
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-600 rounded-lg  text-xl font-bold text-center "
              type="button"
            >
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  detail: PropTypes.object,
};

export default DetailCard;
