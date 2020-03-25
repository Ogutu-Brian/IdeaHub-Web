import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Input from "../Input";

describe("Tests for input component", () => {
  const wrapper: ReactWrapper = mount(<Input />);

  it("Ensures the input component renders without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
