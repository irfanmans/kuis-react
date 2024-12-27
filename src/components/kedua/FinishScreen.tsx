interface FinishScreenProps {
  points: number;
  numQuestion: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: React.Dispatch<{ type: "restart" }>;
}

export default function FinishScreen({
  points,
  numQuestion,
  maxPossiblePoints,
  highscore,
  dispatch,
}: FinishScreenProps) {
  const persentasi = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className="bg-sky-600 px-5 py-5 text-center text-xl text-white rounded-full">
        <p>
          Anda mendapatkan nilai skor {points} dari {numQuestion} pertanyaan (
          {Math.ceil(persentasi)} %)
        </p>
      </div>
      <p className="text-center mt-5 text-white">
        Skor Tertinggi Anda {highscore} Point
      </p>

      <button
        className="py-3 px-5 bg-purple-600 text-white font-medium rounded-xl mt-5 absolute left-1/2 -translate-x-1/2"
        onClick={() => dispatch({ type: "restart" })}
      >
        Ulangi Kuis
      </button>
    </>
  );
}
