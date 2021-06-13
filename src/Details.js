import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const { id } = useParams();
  let item = props.allproducts.filter(data => data.id == id);
  console.log(item)
  console.log(item.name)
  return (
    <>
      {
       <h1>{item[0].name}</h1>
      }
    </>
  );
}

export default Details;
