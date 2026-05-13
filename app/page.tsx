import { PainelTarefas } from "@/components/PainelTarefas";
import { buscarTarefas } from "@/data/tarefas";

import styles from "@/styles/Home.module.css";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Lista de Tarefas</h1>

      <PainelTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
