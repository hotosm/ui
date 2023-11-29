export interface ToggleProps {
  /** Set the state of the toggle: checked/unchecked. */
  checked: boolean;
  /** Trigger on change toggle (checked) state. */
  onChange: () => void;
  /** Label associated with toggle . */
  label: string;
}

/**
 * Toggle component.
 */
export const Toggle = (props: ToggleProps) => {
  return (
    <div className="relative flex flex-row gap-2">
      <label>{props.label}</label>
      <input
        type="checkbox"
        className="w-full h-full opacity-0 absolute cursor-pointer z-[5]"
        checked={props.checked}
        onChange={props.onChange}
      />
      <div
        className={`w-12 h-6 ${
          props.checked ? "bg-primary" : "bg-[#929db3]"
        } rounded-full shadow-inner z-[1] relative`}
      >
        <div
          className={`w-5 h-5 top-[0.125rem] bottom-[0.125rem] bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out translate-x-0 absolute ${
            props.checked ? "left-[1.625rem]" : "left-[0.125rem]"
          }`}
        ></div>
      </div>
    </div>
  );
};
