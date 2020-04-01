import React from "react";
import { ReactWrapper, mount } from "enzyme";

import { Idea } from "../";

describe("Tests for idea", () => {
  const wrapper: ReactWrapper = mount(<Idea />);

  it("Should mount idea without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
