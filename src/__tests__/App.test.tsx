import React from "react";
import { mount, ReactWrapper } from "enzyme";

import App from "../App";

describe("Tests mounting of the application without crushing", () => {
  const wrapper: ReactWrapper = mount(<App />);

  it("should test for mounting of the application without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
