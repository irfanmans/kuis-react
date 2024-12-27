interface QuestionProps {
  question: {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
  };
  dispatch: (action: { type: "newAnswer"; payload: number }) => void;
  answer: number | null;
}

export default function Question({
  question,
  dispatch,
  answer,
}: QuestionProps) {
  const hasAnswer = answer !== null;
  const optionLabels = ["A.", "B.", "C.", "D."];
  return (
    <>
      <div className="text-center font-poppins text-white">
        <h3 className="text-2xl font-medium">{question.question}</h3>
        <div className="space-y-5 mt-10">
          {question.options.map((data, index) => (
            <button
              key={index}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
              disabled={hasAnswer}
              className={`${
                index === answer ? "transform translate-x-8" : ""
              } ${
                hasAnswer
                  ? index === question.correctOption
                    ? "bg-[#0f8ca2]"
                    : "bg-[#fd9f41]"
                  : "bg-[#3f474c] hover:bg-slate-800"
              } flex py-4 px-5 font-semibold rounded-full w-full transation duration-300  hover:translate-x-6`}
            >
              <span className="mr-3">{optionLabels[index]}</span>
              {data}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
