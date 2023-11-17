import { useState } from "react";
import { Button } from "@/button/Button.js";

export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

export const Dropdown = (props: DropdownProps) => {
  const { options, ...rest } = props;

  // Use destructuring to get the selected state and the setter function
  // TODO: Finish component
  const [_selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative">
      <Button>
        <span className="block truncate">{props.placeholder}</span>
      </Button>
      <select
        {...rest}
        className="absolute"
        onChange={(element) => {
          const selectedValue = element.target.value;
          const selectedOption = options.find(
            (option) => option.value === selectedValue,
          );
          if (!selectedOption) return;
          setSelectedOption(selectedOption);
          props.onChange && props.onChange(element);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
