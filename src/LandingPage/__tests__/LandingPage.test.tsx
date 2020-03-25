import { mount, ReactWrapper } from "enzyme";
import React from "react";
import LandingPage from "../LandingPage";

describe("Tests for landing page", () => {
  const wrapper: ReactWrapper = mount(<LandingPage />);

  it("Should render the landing page without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
