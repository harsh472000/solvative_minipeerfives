import { render, waitFor, screen } from "@testing-library/react";
import RewardHistory from "../components/RewardHistory";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
jest.mock("axios");

const dummyData = [
  {
    amount: "6",
    givenby: "Makani",
    date: "2022-07-26T05:46:01.877+00:00",
  },
];

test("P5 list", async () => {
  axios.get.mockResolvedValue({ data: dummyData });
  render(
    <Router>
      <RewardHistory />
    </Router>
  );

  const list = await waitFor(() => screen.findAllByTestId("history"), {
    timeout: 3000,
  });
  expect(list).toHaveLength(1);
});
