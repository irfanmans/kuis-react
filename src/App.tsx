import { useEffect, useReducer } from "react";
import Main from "./components/kedua/Main";
import Loading from "./components/kedua/Loading";
import Error from "./components/kedua/Error";
import StartScreen from "./components/kedua/StartScreen";
import Question from "./components/kedua/Question";
import NextButtonQuestion from "./components/kedua/NextButtonQuestion";
import Progress from "./components/kedua/Progress";
import FinishScreen from "./components/kedua/FinishScreen";

interface Questions {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface State {
  questions: Questions[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: null | number;
  point: number;
  highscore: number;
}

type Action =
  | { type: "dataReceived"; payload: Questions[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" };

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  point: 0,
  highscore: 0,
};

function reducer(state: State, action: Action): State {
  let question;

  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        point:
          action.payload === question.correctOption
            ? state.point + question.points
            : state.point,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.point > state.highscore ? state.point : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      throw new Error("Action Unknow");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, point, highscore } = state;

  console.log(answer);

  // Mendapatkan jumlah pertanyaan
  const numQuestion = questions.length;
  const maxPossiblePoint = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <>
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestion}
              points={point}
              maxPossiblePoint={maxPossiblePoint}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButtonQuestion
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestion={numQuestion}
            />
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            points={point}
            numQuestion={numQuestion}
            highscore={highscore}
            maxPossiblePoints={maxPossiblePoint}
            dispatch={dispatch}
          />
        )}
      </Main>
    </>
  );
}

export default App;
