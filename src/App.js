import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/fluent-ui";
import ArrayFieldTemplate from "./components/customArrayTemplates";

const schema: RJSFSchema = {
  title: "Test form",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
    CollapsiblePanel: {
      type: "array",
      title: "Collapsible Panel",
      items: {
        type: "object",
        title: "Array Item",
        required: ["ArrayLabel", "ArrayItem2"],
        properties: {
          ArrayLabel: {
            type: "string",
            title: "Array Label",
          },
          Priority: {
            type: "integer",
            title: "Array Item 2",
          },
        },
      },
    },
  },
};

const uiSchema = {
  "ui:ArrayFieldTemplate": ArrayFieldTemplate,
  name: {
    "ui:classNames": "custom-class-name",
  },
  age: {
    "ui:classNames": "custom-class-age",
  },
  CollapsiblePanel: {
    "ui:description": "Panel Description.",
    items: {
      ArrayLabel: {
        "ui:enableMarkdownInDescription": true,
        "ui:description": "Label Description",
        "ui:help": "A Label Description",
      },
      ArrayItem2: {
        "ui:enableMarkdownInDescription": true,
        "ui:description": "Just another Item",
        "ui:help": "This is just another item",
      },
    },
  },
};

function App() {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      validator={validator}
      templates={{ ArrayFieldTemplate }}
    />
  );
}

export default App;
