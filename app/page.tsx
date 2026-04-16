import Image from "next/image";
import styles from "./styles/page.module.css";
import { lusitana } from "./fonts/fonts";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>APRENDENDO NEXT.JS DIRETAMENTE DA DOCUMENTAÇÃO</h1>
      <Image
        src = "/next.svg"
        alt = "teste"
        width = {100}
        height = {100}
        />
      <p>Vamos abordar como criar diferentes rotas para a aplicação criada em Next.js</p>
    </div>
  );
}
