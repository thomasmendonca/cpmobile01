import { Apple } from "lucide-react";

interface IconProps{
    name:string,
}

export function Icon({name}: IconProps){
    return(
        <Apple/>
    )
}