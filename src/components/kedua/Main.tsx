import { ReactNode } from "react";

interface PropsMain {
  children: ReactNode;
}

export default function Main({ children }: PropsMain) {
  return (
    <>
      <main className="w-full lg:w-1/2 px-6 mx-auto mt-20 font-poppins lg:relative">
        {children}
      </main>
    </>
  );
}
