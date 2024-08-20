import React from "react";
import GameButton from "./components/GameButton";
import UserStore from "./MobxStore/UserStore";
import { observer } from "mobx-react";

function generateRandomReset() {
  return `reset-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
}
@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resetClicking: "",
      time: 0,
      pointAmount: 0,
      pointButton: [],
      showButton: false
    }
  }

  handlePoints = (event) =>{
    event.stopPropagation();
    this.setState({pointAmount: event.target.value});
  }
  loadingButton = () =>{
    let pointAmount = this.state.pointAmount;
    let pointButtonArray = [];
    UserStore.setPointAmountClicked(pointAmount);
    this.setState({pointButton: pointButtonArray});
    for (let i = 0; i < pointAmount; i++){
      let buttonData = {
        point: i
      }
      pointButtonArray.push(buttonData);
    }
    return this.setState({pointButton: pointButtonArray});
  }
  startPlay = (event) => {
    event.preventDefault();
    UserStore.startTimer();
    this.loadingButton();
    this.setState({resetButton: true});
    this.setState({showButton: true});
  }
  onReset = (event) => {
    event.preventDefault();
    UserStore.startTimer();
    this.setState({resetClicking: generateRandomReset()})
    this.setState({pointButton: []});
    UserStore.setResult("");
    this.loadingButton();
  }
  render() {
    return (
      <div className="home-page">
        <h1>Let's Play</h1>
        <h2 className={UserStore.result == "Winner" ? "winning" : "game-over"}>{UserStore.result}</h2>
        <form>
          <label>
            Points:
            <input type="number" name="points" onChange={this.handlePoints}/>
          </label>
          <p>{UserStore.time}</p>
          {this.state.resetButton 
          ? (
            <button className="play-btn" onClick={this.onReset}>Reset</button>
          )
            : (
              <button className="play-btn" onClick={this.startPlay}>Let's Play</button>
            )
          }
        </form>
        {this.state.showButton && this.state.pointButton
          ? (
            <div className="point-board">
              {this.state.pointButton.map((pointButton) => (
                <GameButton
                  pointButtonData={this.state.pointButton}
                  point={pointButton.point}
                  pointAmount={UserStore.pointAmountClicked}
                  resetClicking={this.state.resetClicking}
                />
              ))}
            </div>
          )
          : null
        }
      </div>
    )
  }
}
export default App;
