import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let beachDays = {
  total: 100,
  sunny: 35,
  highWaves:90,
  rainy:55,
  flat_days:4,
  empty: 10,
};



class BeachDays extends Component {

  getPercent = decimal => {
    return decimal * 100 + '%';
  };

  checkFlatdays = (flatDays, total) => {
    let flatResult = flatDays/total;
    console.log(flatResult);
    if(flatResult <1 ) {
      return (`There were ${flatDays} flat days! That´s ${this.getPercent(flatResult)}`);
    } else {
      return ('Dude, to manny flat days!');
    }
  };

  render() {
    const {total,sunny,highWaves,rainy,flat} = this.props
    return(
      <section>
        <h1>Beach Days :</h1>
        <div>
          <p>Total Beach Days : {total}</p>
        </div> 
        <div>
          <p>Total Sunny Days and Rainy Days: {sunny} and {rainy}</p>
        </div> 
        <div>
          <p>Total highWave Days : {highWaves}</p>
          <p>Total flat Days: {flat}</p>
        </div> 
        <div>
          <p>Sunny Days : {sunny}</p>
        </div> 
        Flat Days Func: {this.checkFlatdays(flat,total)}
      </section>
    )
  }
};

render(
  <BeachDays 
  total={beachDays.total}
  sunny={beachDays.sunny}
  highWaves={beachDays.highWaves}
  rainy={beachDays.rainy}
  flat={beachDays.flat_days}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
