import { render, waitFor, screen } from "@testing-library/react";
import P5History from "../components/P5History";
import axios from "axios";
//import { Router } from "express";

import { BrowserRouter as Router } from "react-router-dom";
jest.mock("axios");

const dummyData = [
  {
    amount: 5,
    createdAt: "2022-07-26T05:45:24.437Z",
    givento: "Makani",
    updatedAt: "2022-07-26T05:45:24.437Z",
    __v: 0,
    _id: "62df7f74468dd074d4d38704",
  },
  {
    amount: 10,
    createdAt: "2022-07-26T06:02:21.159Z",
    givento: "Harsh Meghani",
    updatedAt: "2022-07-26T06:02:21.159Z",
    __v: 0,
    _id: "62df836d468dd074d4d38cd2",
  },
];

test("p5 history list", async () => {
  axios.get.mockResolvedValue({ data: dummyData });
  render(
    <Router>
      <P5History />
    </Router>
  );

  const list = await waitFor(() => screen.findAllByTestId("P5history"), {
    timeout: 3000,
  });
  expect(list).toHaveLength(1);
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    pid: "p-id1",
  }),
  useRouteMatch: () => ({ url: "/pid/P5" }),
}));
