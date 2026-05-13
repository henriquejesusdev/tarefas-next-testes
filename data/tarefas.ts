export type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

const tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar testes unitários",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Criar projeto Next.js",
    concluida: true,
  },
  {
    id: 3,
    titulo: "Testar componentes",
    concluida: false,
  },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefas);
}
