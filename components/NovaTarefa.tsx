"use client";

import { FormEvent, useState } from "react";
import styles from "./NovaTarefa.module.css";

type NovaTarefaProps = {
  onAdicionar: (titulo: string) => void;
};

export function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!titulo.trim()) {
      setErro("Digite uma tarefa");
      return;
    }

    onAdicionar(titulo);

    setTitulo("");
    setErro("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <label htmlFor="titulo" className={styles.label}>
        Nova tarefa
      </label>

      <input
        id="titulo"
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        className={styles.input}
      />

      <button type="submit" className={styles.botao}>
        Adicionar
      </button>

      {erro && (
        <p role="alert" className={styles.erro}>
          {erro}
        </p>
      )}
    </form>
  );
}
