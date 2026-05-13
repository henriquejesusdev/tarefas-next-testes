import { renderHook } from "@testing-library/react";

import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("Hook useContadorDeTarefas", () => {
  it("deve retornar quantidade correta", () => {
    const tarefas = [
      {
        id: 1,
        titulo: "Tarefa 1",
        concluida: false,
      },
      {
        id: 2,
        titulo: "Tarefa 2",
        concluida: true,
      },
      {
        id: 3,
        titulo: "Tarefa 3",
        concluida: false,
      },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);
  });

  it("deve retornar zero quando array vazio", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });
});
