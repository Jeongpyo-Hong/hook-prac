import React, { useReducer, Component } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const onDecrease = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   return (
//     <div>
//       <div>Counter: {number}</div>
//       <button onClick={onIncrease}>+</button>
//       <button onClick={onDecrease}>-</button>
//     </div>
//   );
// };

// export default Counter;

/**
 * 클래스형 컴포넌트로 작성 시,
 */

class Counter extends Component {
  state = {
    counter: 0,
  };

  // 아래와 같이 클래스 내부에 종속된 함수를 '메서드'라고 칭함
  handleIncrease = () => {
    this.setState(
      (state) => (
        {
          counter: this.state.counter + 1,
        },
        () =>
          console.log(
            "setState의 2번째 파라미터는 상태가 업데이트 된 후 실행될 작업을 의미"
          )
      )
    );
  };

  handleDecrease = () => {
    this.setState((state) => ({
      counter: this.state.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
