import Image from "next/image";
import explorador from "@/assets/explorador.png";

export default function Pagina404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-7 text-center">
      <h1 className="text-3xl text-zinc-400 font-bold">404 Not Found</h1>
      <Image src={explorador} alt="404 Error" width={300} height={300} />

      <p className="text-lg max-w-[600px]">
        Você parece ter se perdido... tente voltar para a tela inicial!
      </p>

      <a href="/" className="bg-blue-500 py-2 px-4 rounded-md">Voltar</a>
    </div>
  );
}
