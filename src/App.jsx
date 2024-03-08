import './App.css'
import Card from "./components/card";
import Data from './data.json'
let App = () => {

  return (
    <div  className="final_div">
      <h1  className="heading">Color Picker</h1>
      <div className="cards-cont">
          {
            Data.map((element , index) => <Card color= {element.color} colorcode= {element.colorcode} key = {index} />)
          }
      </div>
    </div>
  );
};

export default App;