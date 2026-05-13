"use client";

import { useState } from "react";
import { ListaTarefas } from "@/components/ListaTarefas";
import { NovaTarefa } from "@/components/NovaTarefa";
import { Tarefa } from "@/data/tarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import styles from "@/styles/Home.module.css";

type PainelTarefasProps = {
  tarefasIniciais: Tarefa[];
};

export function PainelTarefas({ tarefasIniciais }: PainelTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const totalDeTarefas = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      {
        id: Math.max(0, ...tarefasAtuais.map((tarefa) => tarefa.id)) + 1,
        titulo,
        concluida: false,
      },
    ]);
  }

  function alterarTarefa(id: number) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.flatMap((tarefa) => {
        if (tarefa.id !== id) {
          return [tarefa];
        }

        if (tarefa.concluida) {
          return [];
        }

        return [
          {
            ...tarefa,
            concluida: true,
          },
        ];
      })
    );
  }

  return (
    <>
      <p className={styles.total}>
        Total de tarefas: {totalDeTarefas}
      </p>

      <NovaTarefa onAdicionar={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        onAlterarTarefa={alterarTarefa}
      />
    </>
  );
}
