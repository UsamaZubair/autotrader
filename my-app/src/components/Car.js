import React from "react";
import "./Car.css";

const Car = props => {
    return (
  
      <div class="card">
        <div class="image">
          <img class = "image1" src={props.type} />
        </div>
  
        <div class="allprices">

          <div class="oldprice">
            <p>RRP</p>
            <p> {props.oldprice} </p>
          </div>
  
          <div class="price">
            <p>{props.price}</p>
          </div>
  
          <div class="saveprice">
            <div class="save">
              <p>SAVE</p>
            </div>
  
            <div class="prices">
              <p> {props.saveprice} </p>
            </div>
          </div>
        </div>
  
        <div class="name">
          <p>{props.name}</p>
        </div>
  
        <div class="info">
          <p>{props.info} </p>
        </div>
  
        <div class = "brand">
  
        <p>BRAND NEW - IN STOCK</p>
  
        </div>
  
      </div>
    )
  };
  
  export default Car;