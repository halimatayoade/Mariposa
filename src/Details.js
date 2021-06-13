import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const { id } = useParams();
  const [product, setItem] = useState({});
  let item = props.allproducts.filter(data => data.id == id);
  setItem(item)
  return (
    <>
      {
        <h1>{product.name}</h1>
      }
    </>
  );
}

export default Details;
