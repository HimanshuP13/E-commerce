// import React, { useEffect, useState } from 'react'
// import axios from "axios";
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import useFetch from '../../hooks/useFetch';

function FeaturedProducts({ type }) {

     const {data,loading ,error} = useFetch(`/products?populate=*& [filters][type][$eq]=${type}`);

   


  return (
    <div className='featureProducts'>
        <div className="top">
            <h1 > {type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae soluta, animi maxime eligendi illo sapiente iure similique quo labore ut assumenda laborum, nemo unde at laudantium, odit et provident.</p>
        </div>
        <div className="bottom">

            {
            error ? "something went  wrong " : loading ? "loading" : data?.map(item => (
                <Card item = {item} key = {item.id}/>
            ))}

        </div>

    </div>
  )
}

export default FeaturedProducts