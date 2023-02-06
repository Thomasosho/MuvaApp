jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";
import WhatWeDoScreen from "../src/screens/what-we-do/WhatWeDo";

it("renders correctly", () => {
  const tree = renderer.create(<WhatWeDoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
