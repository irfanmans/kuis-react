interface ProgressProps {
  index: number;
  numQuestion: number;
  points: number;
  maxPossiblePoint: number;
}

export default function Progress({
  index,
  numQuestion,
  points,
  maxPossiblePoint,
}: ProgressProps) {
  const progressPercentage = (index / numQuestion) * 100;

  return (
    <header className="py-10 text-white">
      <div className="relative w-full h-5 bg-gray-300 rounded-full">
        <div
          style={{
            width: `${progressPercentage}%`,
          }}
          className="h-full bg-sky-600 rounded-full"
        ></div>
        <div className="absolute inset-0 flex justify-center items-center text-xs text-white font-bold">
          {progressPercentage.toFixed(0)}%
        </div>
      </div>

      <div className="flex justify-between mt-5 text-sm">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>
        <p>
          {points} / {maxPossiblePoint}
        </p>
      </div>
    </header>
  );
}
