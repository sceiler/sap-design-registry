import { Button } from "@/components/ui/button";

export const button = {
  name: "button",
  components: {
    Emphasized: <Button variant="default">Emphasized</Button>,
    // Primary1: <Button variant="primary">Primary</Button>,
    Default: <Button variant="outline">Default</Button>,
    Transparent: <Button variant="ghost">Transparent</Button>,
    Negative: <Button variant="destructive">Negative</Button>,
    Positive: <Button variant="positive">Positive</Button>,
    // Ghost: <Button variant="ghost">Ghost</Button>,
    // Ghost: <Button variant="ghost">Ghost</Button>,
    // Link: <Button variant="link">Link</Button>,
  },
};
