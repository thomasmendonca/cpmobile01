import NavBar from "@/components/NavBar";
import { Apple, ChevronDown } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";

export default function Categorias() {

  const categorias = [
    {
      id: 1,
      nome: "alimentação",
      icone: "apple"
    },
    {
      id: 2,
      nome: "transporte",
      icone: "carro"
    },
    {
      id: 3,
      nome: "alimentação",
      icone: "nome"
    },

  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active={"categoria"} />
      <section className="flex flex-col gap-5 bg-slate-900 p-6 mt-6 rounded min-w-96">
        <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
       {categorias.map(categoria=><CategoriaItem categoria={categoria}/>)}


      </section>
    </main>
  );
}
