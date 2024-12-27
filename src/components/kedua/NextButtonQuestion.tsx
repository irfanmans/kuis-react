interface NextButtonQuestionProps {
  answer: null | number;
  numQuestion: number;
  index: number;
  dispatch: React.Dispatch<{ type: "nextQuestion" | "finish" }>;
}

export default function NextButtonQuestion({
  answer,
  numQuestion,
  index,
  dispatch,
}: NextButtonQuestionProps) {
  if (answer === null) return null;

  if (index < numQuestion - 1)
    return (
      <>
        <button
          className="py-3 px-5 bg-purple-600 text-white font-medium rounded-xl mt-5 absolute right-0"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Selanjutnya
        </button>
      </>
    );

  if (index === numQuestion - 1)
    return (
      <>
        <button
          className="py-3 px-5 bg-purple-600 text-white font-medium rounded-xl mt-5 absolute right-0"
          onClick={() => dispatch({ type: "finish" })}
        >
          Selesai
        </button>
      </>
    );
}
