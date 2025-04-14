import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import "./Products.scss"
import useFetch from '../../hooks/useFetch';

function Products() {
  const catId = parseInt(useParams().id);
  const[maxprice,setMaxPrice] = useState(1000);
  const[sort,setSort] = useState(null);
  const[selectedSubCats,setSelectedSubCats] = useState([])
  // const { data, loading, error } = useFetch(
  //   `/sub-categories?[filters][categories][id][$eq]=${catId}`
  // );
  const { data, loading, error } = useFetch(
    `products?populate=*`
  );


  // console.log(data);

  function handleChange(e)  {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats,value] : selectedSubCats.filter((item) => item !== value) )
  }
  console.log(selectedSubCats);

  return (
    <div className='products'>
      <div className="left">
        <div className="filteritems">
          <h3>Product Categories</h3>
          {data?.map(item => (
            <div className="inputitems" key={item.id}>
            <input type="checkbox" id={item.id}  value={item.id} onChange={handleChange}/>
            <label htmlFor = {item.id}>{item.title}</label>

          </div>
          ))}

        </div>
        <div className="filteritems">
        <h3>Filter By Price</h3>
        <div className="inputitems" >
          <span>0</span>
          <input type="range" min={0} max={1000} name="range" id="5" onChange={(e) => setMaxPrice(e.target.value)} />
          <span>{maxprice}</span>
        </div>
        </div>
        <div className="filteritems">
        <h3>Sort By</h3>
        <div className="inputitems">
          <input type="radio"  id='asc' value="asc" name='price' onChange={(e) => setSort("asc")}/>
          <label htmlFor="">Price (Lowest First) {}</label>
        </div>
        <div className="inputitems">
          <input type="radio"  id='desc' value="desc" name='price' onChange={(e) => setSort("desc")}/>
          <label htmlFor="">Price (Highest First) {}</label>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img className='catImg' src="https://img.freepik.com/free-photo/sexy-young-brunette-with-bright-party-makeup-wellbuilt-body-long-silk-dress-resting-outdoors-black-chair-against-peach-wall-background_197531-28187.jpg" alt="" />
          <List  catId ={catId} maxprice = {maxprice} sort= {sort} subCats = {selectedSubCats}/>
        </div>
      </div>
    </div>
  )
}

export default Products