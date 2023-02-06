jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";

import HistoryScreen from "../src/screens/history/History";

it("renders correctly", () => {
  const tree = renderer.create(<HistoryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
