import { ArrayFieldTemplateProps, RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { useState } from "react";

function ArrayFieldTemplate(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="content">
      <h3>{props.title}</h3>
      {props.uiSchema["ui:description"]}
      <br />
      <button onClick={toggle}>{props.title}</button>
      {isCollapsed && (
        <div>
          {props.items.map((element) => element.children)}
          {props.canAdd && (
            <button type="button" onClick={props.onAddClick}>
              Add Item
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ArrayFieldTemplate;
