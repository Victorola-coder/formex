import { TextFieldFormElement } from "./fields/text";

export type ElementsType =
  | "TextField"
 

  export type FormElement = {
    type: ElementsType;
  
    construct: (id: string) => FormElementInstance;
  
    designerBtnElement: {
      icon: React.ElementType;
      label: string;
    };
  
    designerComponent: React.FC<{
      elementInstance: FormElementInstance;
    }>;
    formComponent: React.FC<{
      elementInstance: FormElementInstance;
      submitValue?: SubmitFunction;
      isInvalid?: boolean;
      defaultValue?: string;
    }>;
    propertiesComponent: React.FC<{
      elementInstance: FormElementInstance;
    }>;
  
    validate: (formElement: FormElementInstance, currentValue: string) => boolean;
  };

  export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
  };

  type FormElementsType = {
    [key in ElementsType]: FormElement;
  };

  
export type SubmitFunction = (key: string, value: string) => void;

export const FormElements: FormElementsType = {
    TextField: TextFieldFormElement
    // TextField: TextFieldFormElement,
    // TitleField: TitleFieldFormElement,
    // SubTitleField: SubTitleFieldFormElement,
    // ParagraphField: ParagprahFieldFormElement,
    // SeparatorField: SeparatorFieldFormElement,
    // SpacerField: SpacerFieldFormElement,
    // NumberField: NumberFieldFormElement,
    // TextAreaField: TextAreaFormElement,
    // DateField: DateFieldFormElement,
    // SelectField: SelectFieldFormElement,
    // CheckboxField: CheckboxFieldFormElement,
  }