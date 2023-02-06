jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";
import HomeScreen from "../src/screens/home/Home";

it("renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
