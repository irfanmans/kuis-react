import { ChangeEvent, useReducer } from "react";

interface State {
  count: number;
  step: number;
}

type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "setCount"; payload: number }
  | { type: "setStep"; payload: number }
  | { type: "reset" };

const initialState: State = { count: 0, step: 1 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
}

export default function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;
  console.log(count, step);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  const increment = () => {
    dispatch({ type: "inc" });
  };

  const decrement = () => {
    dispatch({ type: "dec" });
  };

  const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increment}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
