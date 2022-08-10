import { render, screen } from "@testing-library/react";
import NewReward from "../components/NewReward";
import { MemoryRouter } from "react-router-dom";
test("P5 input should be rendered", () => {
  render(
    <MemoryRouter>
      <NewReward />
    </MemoryRouter>
  );
  const p5InputEl = screen.getAllByPlaceholderText(/Enter the P5/i);
  expect(p5InputEl).toBeTruthy();
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
