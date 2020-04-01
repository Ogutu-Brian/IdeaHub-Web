import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Menu from "./Menu";

describe("Tests for menu component", () => {
  const wrapper: ReactWrapper = mount(<Menu />);

  it("Should render menu without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
