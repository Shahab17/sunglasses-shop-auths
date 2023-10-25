import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const ProductDetails = () => {
  const [detail, setDetails] = useState();

  const pDetails = useLoaderData();

  
  console.log(pDetails);
  const { id } = useParams();
  const intId = parseInt(id);
  console.log(intId);

  useEffect(() => {
    const detailsCard = pDetails.find((items) => items.id == intId);
    setDetails(detailsCard);
  }, [intId, pDetails]);

  return (
    <div>
      

    <div className="flex justify-center h-[60vh] items-center">
        <DetailCard detail={detail}></DetailCard>
    </div>
      
    </div>
  );
};

export default ProductDetails;
