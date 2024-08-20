import { observer } from "mobx-react";
import UserStore from "../MobxStore/UserStore";
import React from "react";
import { toJS } from "mobx";

function generateRandomId() {
    return `id-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
}
@observer
class GameButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countClick: 0,
            pointAmount: this.props.pointAmount,
        };

    }
    isAscending = (arr) => {
        for (let i = 0; i < arr.length; i++) {
           if (i > 0 && arr[i - 1] > arr[i]) {
             return false;
           }
        }
        return true;
    }
    pointClicked = (event) =>{
        event.target.style.background = "red"
        event.target.style.opacity = "0"
        event.target.style.transition = "all 1s ease-in-out";
        UserStore.setCountClick();
        UserStore.setPointClicked(this.props.point);
        let checkOrder = this.isAscending(toJS(UserStore.pointClicked));
        if(UserStore.countClick == this.props.pointAmount && checkOrder){
            UserStore.stopTimer();
            UserStore.setResult("Winner");
            UserStore.resetCountClick();
            UserStore.resetPointClicked();
        }else if(!checkOrder){
            UserStore.stopTimer();
            UserStore.setResult("Game Over");
            UserStore.resetCountClick();
            UserStore.resetPointClicked();
        }
    }
    render() {
      return (
            <button
                key={generateRandomId()}
                className="number-point"
                style={{
                    top: Math.floor(Math.random()*500)+1,
                    left: Math.floor(Math.random()*500)+1
                }}
                onClick={this.pointClicked}
            >
                {this.props.point}
            </button>
      )
    }
}
export default GameButton;
