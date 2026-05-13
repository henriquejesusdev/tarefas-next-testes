import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Página Home", () => {
  it("deve renderizar lista de tarefas", async () => {
    const Page = await Home();

    render(Page);

    expect(
      screen.getByRole("heading", {
        name: /lista de tarefas/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/total de tarefas: 3/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/estudar testes unitários/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/criar projeto next.js/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/testar componentes/i)
    ).toBeInTheDocument();
  });
});
