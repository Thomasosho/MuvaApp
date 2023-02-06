jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";

import ContactScreen from "../src/screens/contact/Contact";

it("renders correctly", () => {
  const tree = renderer.create(<ContactScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
