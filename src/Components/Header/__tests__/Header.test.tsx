import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Header from "../Header";
import { Props } from "../interfaces";

describe("header Tests", () => {
  const props: Props = {
    title: "Example Page",
    joinNow: jest.fn(),
    signIn: jest.fn()
  };

  const wrapper: ReactWrapper = mount(<Header {...props} />);
  it("Should render header without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
