import { Apple, ChevronDown } from "lucide-react";

interface CategoriaItemProps{
  categoria:{
    id:number,
    nome:string,
    icone: string
  }
}
export function CategoriaItem(props:CategoriaItemProps){
  const categoria = props.categoria
    return(
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Apple />
            <span>{categoria.nome}</span>
          </div>
          <ChevronDown />
        </div>
    )
}