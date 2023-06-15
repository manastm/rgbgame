import logo from './logo.svg';
import './App.css';
import Timer from './Timer';


function App() {
const headerText = "Display Timer";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* {headerText} */}
        </p>
        <Timer />
        {/* <MyButton />
       <RandomImage /> */}
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button> Button goes crazy </button>
  );
}

function RandomImage() {
  return (
    <img className="avatar" src="https://cdn.shopify.com/s/files/1/2729/8232/files/Zhangjiajie_National_Forest_Park_China.jpg?v=1589816396"/>
  );
}

export default App;
