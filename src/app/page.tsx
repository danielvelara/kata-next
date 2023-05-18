import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-bold text-center text-3xl drop-shadow-[0_0_0.7rem_#ffffff90]">
          Next.js Kata
        </h1>
        <p className="font-mono">By danielvelara</p>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-24">
        <div className="w-full max-w-lg bg-slate-700">
          <p className="text-center text-2xl">Lorem ipsum dolor sit amet.</p>
        </div>
      </main>
    </>
  );
}
