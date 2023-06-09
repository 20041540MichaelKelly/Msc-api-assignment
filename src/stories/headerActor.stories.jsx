import React from "react";
import ActorHeader from "../components/actors/headerActor";
import SampleActor from "./actorSampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Actor Page/ActorHeader",
  component: ActorHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <ActorHeader actor={SampleActor} />;

Basic.storyName = "Default";