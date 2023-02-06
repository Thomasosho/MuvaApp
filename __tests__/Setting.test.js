jest.useFakeTimers("modern");
import React from "react";
import renderer from "react-test-renderer";
import SettingsScreen from "../src/screens/settings/Settings";

it("renders correctly", () => {
  const tree = renderer.create(<SettingsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
