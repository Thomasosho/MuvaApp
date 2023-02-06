jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";

import AboutScreen from "../src/screens/about/About";

// describe("<App />", () => {
//   it("has 1 child", () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree.children.length).toBe(1);
//   });
// });
it("renders correctly", () => {
  const tree = renderer.create(<AboutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
