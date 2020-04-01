import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { Ideas } from "..";

describe("Tests for Ideas", () => {
  const wrapper: ReactWrapper = mount(<Ideas />);

  it("Should render ideas without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
