interface StartScreenProps {
  numQuestion: number;
  dispatch: (action: { type: "start" }) => void;
}

export default function StartScreen({
  numQuestion,
  dispatch,
}: StartScreenProps) {
  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl lg:text-6xl font-bold text-[#58c4dc]">
          Selamat Datang Di React Quiz
        </h2>
        <h3 className="mt-2 text-md lg:text-2xl text-white">
          {numQuestion} question to test your React mastery
        </h3>
        <button
          onClick={() => dispatch({ type: "start" })}
          className="mt-5 py-2 px-5 border-2 text-white rounded-full hover:bg-[#58c4dc] hover:border-sky-300 hover:text-white transition duration-300 ease-in-out hover:scale-125"
        >
          Let's Start
        </button>
      </div>
    </>
  );
}
