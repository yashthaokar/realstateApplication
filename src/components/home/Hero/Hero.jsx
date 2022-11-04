import React, { useState } from "react";
import Heading from "../../common/Heading"
import "./Hero.css"
import { useSelector, useDispatch } from 'react-redux';
import { location_search, propertyType_search, price_search, date_search } from "../../../store/estateSlice";

const Hero = () => {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const changeHandler = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }
  const timeHandler = (e) => {
    setTime(e.target.value);
    console.log(time)
  }
  const priceHandler = (e) => {
    setPrice(e.target.value);
    console.log(price)
  }
  const propertyHandler = (e) => {
    setPropertyType(e.target.value);
    console.log(propertyType)
  }


  const data = useSelector((state) => state.estate_data);
  const dispatch = useDispatch();

  const clickHandler = (...param) => {
    if (location.length > 0) {
      dispatch(location_search(param[0]));
    } else if (price.length > 0) {
      dispatch(price_search(param[1]))
    } else if (time.length > 0) {
      dispatch(date_search(param[3]))
    } else if (propertyType.length > 0) {
      dispatch(propertyType_search(param[2]))
    }
    console.log(param);

  }

  console.log(data);
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Your Dream Home  ' subtitle='Is Just One click Away.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location'
                onChange={changeHandler} />
            </div>
            <div className='box'>
              <span>Date</span>
              <input  type="date" placeholder='when you want' onChange={timeHandler}/>
            </div>

            <div className='box'>
              <span>Property type</span>
              <select name="price" id="cars" className="search-select" onChange={propertyHandler}>
          <option value="1bhk">1bhk</option>
          <option value="2bhk">2bhk</option>
          <option value="3bhk">3bhk</option>
          <option value="4bhk">4bhk</option>
        </select>
            </div>
            <div className='box'>
              <span>Price Range</span>
              <select name="price" id="cars" className="search-select" onChange={priceHandler}>
                <option value="2000-5000">2000-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000-20000">10000-20000</option>
                <option value="20000-50000">20000-50000</option>
              </select>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'onClick={()=>clickHandler(location,price,propertyType,time)}></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
