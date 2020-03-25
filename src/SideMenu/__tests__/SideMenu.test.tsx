import React from "react";
import { mount, ReactWrapper } from "enzyme";
import SideMenu from "../SideMenu";

describe("Tests for the sideMenu", () => {
  const wrapper: ReactWrapper = mount(<SideMenu />);

  it("should render the SideMenu without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
