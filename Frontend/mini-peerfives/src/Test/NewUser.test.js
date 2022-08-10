// import { render, screen } from "@testing-library/react";
import NewUser from "../components/NewUser";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
// import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
let wrapper;
beforeAll(() => {
  wrapper = shallow(<NewUser />);
});
test("should test reward component", () => {
  expect(wrapper).toMatchSnapshot();
});
// test("P5 input should be rendered", () => {
//   render(
//     <MemoryRouter>
//       <NewUser />
//     </MemoryRouter>
//   );
//   const sampleObj = { name: "" };
//   NewUser().then((resp) => {
//     expect(resp).toMatchObject(sampleObj);
//   });
//   const p5InputEl = screen.getAllByPlaceholderText(/enter the name/i);
//   expect(p5InputEl).toBeTruthy();
// });

test("should handled method", () => {
  // const wrapper = shallow(<NewUser />);
  const instance = wrapper.instance();
  const value = "harsh meghani";
  instance.handleSubmit({
    preventDefault: () => {},
    target: {
      name: { value },
    },
  });
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
