import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { first_data,sendToLikedData} from '../../../store/estateSlice';

const RecentCard = () => {  
  const [state, setState] = useState([]);
  let filtered_data = useSelector((data)=>data.filtered_data);
  let data =  useSelector((data)=>data.estate_data);
  
  console.log(data)
  const [like,setLike] = useState(false);

  let liked_data = useSelector((data)=> data.liked_data);
  let dispatch = useDispatch();

  const clickHandler = (params) => {
    if(like){
      setLike(false)
    }else{
      setLike(true)
    }
    dispatch(sendToLikedData(params))
  }

  // const handelClick = (param) => {
  //   // setIsActive(current => !current);    // color change of heart button
  //   let exsting = localStorage.getItem('sendData')
  //   if (!exsting) {
  //     let newArray = []
  //     newArray.push(param)
  //     localStorage.setItem('sendData', JSON.stringify(newArray));
  //     alert('Saved in Favrote List 🧡. You can Find it on MyList')
  //   }
  //   else {
  //     let parse = JSON.parse(exsting)
  //     parse.push(param)
  //     localStorage.setItem('sendData', JSON.stringify(parse));
  //     alert('Saved in Favrote List 🧡. You can Find it on MyList')
  //   }



  // };


  return (
    <>
      <div className='content grid3 mtop'>
        {filtered_data.length===0 ? data.map((val, index) => {

          const { cover, category, location, name, price, type,date } = val
          return (
            <div className='box shadow' key={index} state={state} setState={setState}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'
                    ></i>

                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot' ></i> {location}
                  <br />
                  <span>{date}</span>
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>Rs</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        }):
        filtered_data.map((val, index) => {

          const { cover, category, location, name, price, type,date } = val
          return (
            <div className='box shadow' key={index} state={state} setState={setState}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'onClick={()=>clickHandler(data)} style={{color:like?"red":"blue"}}>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'
                     ></i>

                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot' ></i> {location}
                  <br />
                  <span>{date}</span>
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>Rs{price}</button> <label htmlFor=''>Rs</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })

      }
      </div>
    </>
  )
}

export default RecentCard
