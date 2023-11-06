import { Dropdown } from "./Dropdown.js";

export const DropdownStory = () => {
  return (
    <Dropdown
      options={[
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ]}
      placeholder="Select an option"
    />
  )
}