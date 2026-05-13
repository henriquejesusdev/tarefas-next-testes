import { fireEvent, render, screen, within } from "@testing-library/react";
import { PainelTarefas } from "@/components/PainelTarefas";
import { Tarefa } from "@/data/tarefas";

const tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: "Tarefa pendente",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Tarefa concluida",
    concluida: true,
  },
];

describe("PainelTarefas", () => {
  it("deve atualizar o total ao adicionar nova tarefa", () => {
    render(<PainelTarefas tarefasIniciais={tarefas} />);

    expect(screen.getByText(/total de tarefas: 2/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/nova tarefa/i), {
      target: {
        value: "Nova tarefa criada",
      },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /adicionar/i,
      })
    );

    expect(screen.getByText(/total de tarefas: 3/i)).toBeInTheDocument();
    expect(screen.getByText("Nova tarefa criada")).toBeInTheDocument();
  });

  it("deve marcar uma tarefa pendente como concluida", () => {
    render(<PainelTarefas tarefasIniciais={tarefas} />);

    const item = screen.getByText("Tarefa pendente").closest("li");

    expect(item).not.toBeNull();
    expect(within(item as HTMLElement).getByText("Pendente")).toBeInTheDocument();

    fireEvent.click(
      within(item as HTMLElement).getByRole("button", {
        name: /concluir/i,
      })
    );

    expect(within(item as HTMLElement).getByText(/conclu/i)).toBeInTheDocument();
    expect(
      within(item as HTMLElement).getByRole("button", {
        name: /remover/i,
      })
    ).toBeInTheDocument();
  });

  it("deve remover uma tarefa concluida", () => {
    render(<PainelTarefas tarefasIniciais={tarefas} />);

    const item = screen.getByText("Tarefa concluida").closest("li");

    expect(item).not.toBeNull();

    fireEvent.click(
      within(item as HTMLElement).getByRole("button", {
        name: /remover/i,
      })
    );

    expect(screen.queryByText("Tarefa concluida")).not.toBeInTheDocument();
    expect(screen.getByText(/total de tarefas: 1/i)).toBeInTheDocument();
  });
});
