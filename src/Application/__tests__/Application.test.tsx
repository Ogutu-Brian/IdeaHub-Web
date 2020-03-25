import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Application from "../Application";

describe("Tests for application component", () => {
  const wrapper: ReactWrapper = mount(<Application />);

  it("Should render application component without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
