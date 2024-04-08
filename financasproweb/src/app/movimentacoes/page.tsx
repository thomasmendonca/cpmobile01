import NavBar from "@/components/NavBar"

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active={"movimentações"}/>
        <h2>Movimentações</h2>
      </main>
    );
  }
  