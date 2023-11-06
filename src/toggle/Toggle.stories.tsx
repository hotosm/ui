import { useState } from "react";
import { Toggle } from "./Toggle.js";

export const ToggleStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Toggle
      onChange={() => setChecked(!checked)}
      checked={checked}
      label="Toggle"
    />
  )
}