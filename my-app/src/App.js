import React, { Component } from "react";
import audi from "./images/audi.jpg";
import bmw from "./images/bmw.jpg";
import mercedes from "./images/mercedes.jpg";
import rangerover from "./images/rangerover.jpg";
import "./App.css";
import Car from "./components/Car";

class App extends Component {
  state = {
    deals: [
      {
        name: "Mercedes E Class",
        info: "5 Door Automatic Saloon",
        saveprice: "£ 5000",
        oldprice: "£ 35,000",
        price: "£ 30,000",
        type: mercedes
      },

      {
        name: "BMW 5 Series M Sport",
        info: "5 Door Automatic Saloon",
        saveprice: "£ 5000",
        oldprice: "£ 35,000",
        price: "£ 30,000",
        type: mercedes
      },

      {
        name: "Audi A6 S line",
        info: "5 Door Automatic Saloon",
        saveprice: "£ 5000",
        oldprice: "£ 35,000",
        price: "£ 30,000",
        type: rangerover
      },

      {
        name: "Range Rover Sport",
        info: "5 Door Automatic SUV",
        saveprice: "£ 5000",
        oldprice: "£ 35,000",
        price: "£ 30,000",
        type: rangerover
      }
    ]
  };

  render() {
    const allDeals = this.state.deals.map((deals, index) => {
      return (
        <Car
          name={deals.name}
          info={deals.info}
          saveprice={deals.saveprive}
          oldprice={deals.oldprice}
          price={deals.price}
          type={deals.type}
          key={index}
        />
      );
    });
    return (
      <div className="App">
        <div class="headers">
          <h1>Latest Brand New Car Deals</h1>

          <div class="deals">
            <h1>View More Deals</h1>
          </div>
        </div>

        <div class="deal">{allDeals}</div>
      </div>
    );
  }
}

export default App;
