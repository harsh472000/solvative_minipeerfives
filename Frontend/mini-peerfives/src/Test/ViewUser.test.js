import { render } from "@testing-library/react";
import ViewUser from "../components/ViewUser";
import { MemoryRouter } from "react-router-dom";
// const mockedUsedNavigate = jest.fn();
test("P5 input should be rendered", () => {
  render(
    <MemoryRouter>
      <ViewUser />
    </MemoryRouter>
  );
  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
  }));
});
