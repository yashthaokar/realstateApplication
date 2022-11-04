import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  estate_data : [
    {
      id: 1,
      cover: "../images/list/p-1.png",
      name: "Red Carpet Real Estate",
      location: "210 new Delhi",
      category: "For Rent",
      price:2000,
      type:"1bhk",
      date:"2022-11-06"
    },
    {
      id: 2,
      cover: "../images/list/p-2.png",
      name: "Fairmount Properties",
      location: "5698 Zirak Road,Pune",
      category: "For Sale",
      price:15000,
      type:"2bhk",
      date:"2022-11-03"
    },
    {
      id: 3,
      cover: "../images/list/p-7.png",
      name: "The Real Estate Corner",
      location: "43 AirPort Road, MumBai",
      category: "For Rent",
      price:22000,
      type:"3bhk",
      date:"2022-11-01"
    },
    {
      id: 4,
      cover: "../images/list/p-4.png",
      name: "Herringbone Realty",
      location: "city pride hote, Pune",
      category: "For Sale",
      price:10000,
      type:"4bhk",
      date:"2022-11-16"
    },
    {
      id: 5,
      cover: "../images/list/p-5.png",
      name: "Brick Lane Realty",
      location: "2 maharana Road, Nagpur",
      category: "For Rent",
      price:49000,
      type:"2bhk",
      date:"2022-11-06"
    },
    {
      id: 6,
      cover: "../images/list/p-6.png",
      name: "Banyon Tree Realty",
      location: "Garden Road, Bhopal",
      category: "For Sale",
      price:35000,
      type:"1bhk",
      date:"2022-11-18"
    }
  ],
  filtered_data:[],
  liked_data:[]
}

export const estateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    location_search: (state,action) => {
      function location(data){
        return data.location === action.payload ;
      }
      state.filtered_data = state.estate_data.filter(location);
      console.log(state.filtered_data);
    },
    price_search: (state,action) => {
      let priceRange = action.payload.split("-")
      console.log(priceRange)
      function price(data){
        if(Number(data.price) > priceRange[0] && Number(data.price) < priceRange[1] ){
          return data;
        }
       
      };
      
      state.filtered_data = state.estate_data.filter(price);
      console.log(state.filtered_data);
    },
    sendToLikedData : (state,action) => {
      console.log(action.payload)
      state.liked_data.push(action.payload);
      console.log(state.liked_data);
    },
    propertyType_search:(state,action) => {
      function property(data){
        return data.propertyType === action.payload ;
      }
      state.filtered_data = state.estate_data.filter(property);
      console.log(state.filtered_data,action.payload);
    },
    date_search:(state,action) => {
      console.log(action.payload);
      function dateFilter(data){
        return data.date === action.payload
      }
      state.filtered_data = state.estate_data.filter(dateFilter)
      console.log(state.filtered_data);
    }
  },
})


export const { first_data, location_search,sendToLikedData,propertyType_search ,price_search,date_search } = estateSlice.actions;

export default estateSlice.reducer ; 