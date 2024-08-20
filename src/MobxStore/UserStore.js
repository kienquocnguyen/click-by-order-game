import { observable, action } from "mobx";

class User {
  @observable startButtonClicked = false
  @observable time = 0;
  @observable intervalId = null;
  @observable pointAmountClicked = 0;
  @observable result = "";
  @observable countClick = 0;
  @observable pointClicked = [];

  @action setStartButtonClicked = (value) =>{
    this.startButtonClicked = value;
  }
  @action setTime = (value) =>{
    this.time = value;
  }
  @action setIntervalId = (value) =>{
    this.intervalId = value;
  }
  @action startTimer = () => {
    this.setTime(0);
    if (this.intervalId === null) {
      // Start a new interval only if there isn't one running
      const intervalId = setInterval(() => {
        this.setTime(this.time + 1);
      }, 1000);
      this.setIntervalId(intervalId);
    }
  }
  @action stopTimer = () =>{
    clearInterval(this.intervalId);
    this.setIntervalId(null);
  }
  @action setPointAmountClicked = (pointAmount) =>{
    this.pointAmountClicked = pointAmount;
  } 
  @action setPointClicked = (point) =>{
    this.pointClicked.push(point)
  }
  @action resetPointClicked = () =>{
    this.pointClicked = [];
  }
  @action setResult = (result) =>{
    this.result = result;
  }
  @action setCountClick = () =>{
    this.countClick = this.countClick + 1;
  }
  @action resetCountClick = () =>{
    this.countClick = 0;
  }
}
const UserStore = new User();
export default UserStore;