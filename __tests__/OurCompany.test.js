jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";
import OurCompanyScreen from "../src/screens/our-company/OurCompany";

it("renders correctly", () => {
  const tree = renderer.create(<OurCompanyScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
