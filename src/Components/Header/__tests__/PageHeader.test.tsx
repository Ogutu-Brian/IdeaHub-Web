import React from "react";
import { mount, ReactWrapper } from "enzyme";

import PageHeader from "../PageHeader";

describe("Tests for the page header", () => {
  const props = {
    openSideBar: jest.fn()
  };
  const wrapper: ReactWrapper = mount(<PageHeader {...props} />);

  it("Should test for the rendering of the page header without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
