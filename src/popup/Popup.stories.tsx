import { Popup } from "./Popup.js";
import { Button } from "@/button/Button.js";

export const PopupStory = () => {
  return (
    <Popup
      title="Popup Title"
      actions={
        <div className={"grid grid-cols-2 gap-4"}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </div>
      }
      position={"top-right"}
    >
      <div>Popup Content</div>
    </Popup>
  );
};
