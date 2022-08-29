import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="zero text-right">0</h1>
          </div>
        </div>
        <div className="row signs">
          <div className="col-md-3">
            <h1>AC</h1>
          </div>
          <div className="col-md-3">
            <h1>+/-</h1>
          </div>
          <div className="col-md-3">
            <h1>%</h1>
          </div>
          <div className="col-md-3 division">
            <h1>÷</h1>
          </div>
        </div>
        <div className="row no-1">
          <div className="col-md-3">
            <h1>7</h1>
          </div>
          <div className="col-md-3">
            <h1>8</h1>
          </div>
          <div className="col-md-3">
            <h1>9</h1>
          </div>
          <div className="col-md-3 division">
            <h1>x</h1>
          </div>
        </div>
        <div className="row no-2">
          <div className="col-md-3">
            <h1>4</h1>
          </div>
          <div className="col-md-3">
            <h1>5</h1>
          </div>
          <div className="col-md-3">
            <h1>6</h1>
          </div>
          <div className="col-md-3 division">
            <h1>-</h1>
          </div>
        </div>
        <div className="row no-3">
          <div className="col-md-3">
            <h1>1</h1>
          </div>
          <div className="col-md-3">
            <h1>2</h1>
          </div>
          <div className="col-md-3">
            <h1>3</h1>
          </div>
          <div className="col-md-3 division">
            <h1>+</h1>
          </div>
        </div>
        <div className="row no-4">
          <div className="col-md-6">
            <h1 className="text-center">0</h1>
          </div>
          <div
            className="col-md-3 final-row"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <h1>.</h1>
          </div>
          <div
            className="col-md-3 final-row"
            style={{ backgroundColor: "blueviolet", color: "white" }}
          >
            <h1>=</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
