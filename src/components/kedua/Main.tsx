import { ReactNode } from "react";

interface PropsMain {
  children: ReactNode;
}

export default function Main({ children }: PropsMain) {
  return (
    <>
      <main className="w-1/2 mx-auto mt-20 font-poppins relative">
        {children}
      </main>
    </>
  );
}
