import { Tarefa } from "@/data/tarefas";
import styles from "./ListaTarefas.module.css";

type ListaTarefasProps = {
  tarefas: Tarefa[];
  onAlterarTarefa: (id: number) => void;
};

export function ListaTarefas({
  tarefas,
  onAlterarTarefa,
}: ListaTarefasProps) {
  return (
    <ul className={styles.lista}>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={styles.item}>
          <span>{tarefa.titulo}</span>

          <div className={styles.acoes}>
            <span
              className={`
                ${styles.status}
                ${tarefa.concluida ? styles.concluida : styles.pendente}
              `}
            >
              {tarefa.concluida ? "Concluída" : "Pendente"}
            </span>

            <button
              type="button"
              className={styles.botao}
              onClick={() => onAlterarTarefa(tarefa.id)}
            >
              {tarefa.concluida ? "Remover" : "Concluir"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
