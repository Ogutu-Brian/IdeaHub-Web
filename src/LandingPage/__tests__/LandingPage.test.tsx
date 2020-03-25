import { mount, ReactWrapper } from "enzyme";
import React from "react";
import LandingPage from "../LandingPage";
import { BrowserRouter } from "react-router-dom";

describe("Tests for landing page", () => {
  const wrapper: ReactWrapper = mount(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );

  it("Should render the landing page without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
