import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "./Button";

storiesOf("atoms/Button", module).add("default", () => (
  <Button>click me</Button>
));
