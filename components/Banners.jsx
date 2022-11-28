import React, { Component } from "react";
import Slider from "react-slick";

export default class Banners extends Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:3000
      
    };
    return (
      <div className="h-[70vh] bg-[#1e2029] text-center ">
        <div className="flex justify-center">
          <Slider {...settings} className=" w-[90%] justify-center">
            
            <div className="relative left-[20%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/1.jpg"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[20%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/2.jpg"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[20%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/3.jpg"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[20%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/4.jpg"
                alt=""
                style={{ height: "500px", width: "1000px", borderRadius:'35px' }}
              />
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
}
