import { Button } from "@ui5/webcomponents-react";

export const button = {
  name: "button",
  components: {
    Primary: <Button design="Emphasized">Primary</Button>,
    Secondary: <Button design="Default">Secondary</Button>,
    Outline: <Button design="Transparent">Outline</Button>,
  },
};
