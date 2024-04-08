import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "movimentações" | "categoria"
}

export default function NavBar(props: NavBarProps) {
    const active = props.active
    const activeClass = "border-b-4 pb-4 border-pink-600"
    return (
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold">Finanças Pro</h1>
            <ul className="flex gap-6">
                <li className={active == "dashboard" ? activeClass : ""}>
                    <Link href="/">Dashboard</Link>
                </li>
                <li className={active == "movimentações" ? activeClass : ""}>
                    <Link href="/movimentacoes">Movimentações</Link>
                </li>
                <li className={active == "categoria" ? activeClass : ""}>
                    <Link href="/categorias">Categorias</Link>
                </li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img className="" src="https://i.pravatar.cc/500  " alt="avatar do usuário" />
            </div>
        </nav>
    )
}