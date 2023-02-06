jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";
import LocationScreen from "../src/screens/location/Location";

it("renders correctly", () => {
  const tree = renderer.create(<LocationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
