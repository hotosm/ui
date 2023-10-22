import {Toggle} from "./Toggle";
import {useState} from "react";

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