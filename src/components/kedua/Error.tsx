interface ErrorProps {
  error: string;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="p-3 bg-red-500 rounded-md text-center text-white font-poppins font-bold">
      <p>Error: {error}</p>
    </div>
  );
}
