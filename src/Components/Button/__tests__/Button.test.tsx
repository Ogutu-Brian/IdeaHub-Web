import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Button from "../Button";

describe("Tests for button", () => {
  const buttonText: string = "Example Button Text";
  const wrapper: ReactWrapper = mount(<Button>{buttonText}</Button>);

  it("Should ensure the button is rendered correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a label", () => {
    expect(wrapper.contains(buttonText)).toEqual(true);
  });
});
