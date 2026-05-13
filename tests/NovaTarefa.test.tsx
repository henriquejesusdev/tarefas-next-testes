import { render, screen, fireEvent } from "@testing-library/react";
import { NovaTarefa } from "@/components/NovaTarefa";

describe("Componente NovaTarefa", () => {
  it("deve renderizar input e botão", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(
      screen.getByLabelText(/nova tarefa/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /adicionar/i,
      })
    ).toBeInTheDocument();
  });

  it("deve mostrar erro ao enviar campo vazio", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /adicionar/i,
      })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Digite uma tarefa"
    );
  });

  it("deve chamar onAdicionar com valor digitado", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.change(screen.getByLabelText(/nova tarefa/i), {
      target: {
        value: "Estudar Next.js",
      },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /adicionar/i,
      })
    );

    expect(onAdicionar).toHaveBeenCalledTimes(1);

    expect(onAdicionar).toHaveBeenCalledWith(
      "Estudar Next.js"
    );
  });
});
