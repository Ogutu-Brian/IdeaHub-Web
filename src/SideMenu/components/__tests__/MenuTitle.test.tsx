import React from "react";
import { mount, ReactWrapper } from "enzyme";

import MenuTitle from "../MenuTitle";
import { faClock } from "@fortawesome/free-regular-svg-icons";

describe("Menu Title tests", () => {
  const props = {
    icon: faClock,
    label: "My Spaces"
  };

  const wrapper: ReactWrapper = mount(<MenuTitle {...props} />);

  it("Tests for rendering of menu title without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
