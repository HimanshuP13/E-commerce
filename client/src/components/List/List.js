import React from 'react'
import Card from '../Card/Card'
import "./List.scss"
import useFetch from '../../hooks/useFetch';

function List(subCats,maxprice,catId,sort) {
  const { data, loading, error } = useFetch(
    `products?populate=*`
  );

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats?.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxprice}&sort=price:${sort}`
  // );

//   const subCategoryFilters = Array.isArray(subCats)
//   ? subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`).join("")
//   : "";

// // Construct the API URL
// const query = `/products?populate=*&[filters][categories][id]=${catId}${subCategoryFilters}&[filters][price][$lte]=${maxprice}&sort=price:${sort}`;

// const { data, loading, error } = useFetch(query);



   
           
  return (
    <div className='list'>
        {loading ?  "Loading" : data ?.map(item => (
            <Card item={item} key={item.id}/>
        ))}
        
    </div>
  )
}

export default List