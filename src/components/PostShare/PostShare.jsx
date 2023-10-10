import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [popup,setPopup]= useState(false);
  const handleclickopen= () =>{
    setPopup(!popup)
  }
  const closepopup= () =>{
    setPopup(false);
  }
  const [data,setData]=useState({
    date:'',
  })
  const{date}=data;
  const onChange= e =>{
    setData(...data,{[e.target.name]:[e.target.value]})
  }
  const clickSubmit= e =>{
    console.log(data)
  }


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
          <div className='calendar'>
            <button onClick={handleclickopen}> <UilSchedule value="schedule"/></button>
          </div>
          {popup?
            <div className='mainpopup'>
              <div className="popup">
                <div className='popupheader'>
                  <h1>DateAndTime</h1>
                  <h1 onClick={closepopup}>X</h1>
                </div>
                <div className="submiButton">
                  <input type='datetime-local' name='date' value={date} onChange={onChange} id="date-time"/>
                  <button id="date-timebutton" onClick={clickSubmit}>Submit</button>
              </div>
            </div>
           </div>:""}
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
