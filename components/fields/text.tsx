"use client"


import { MdTextFields } from "react-icons/md"
import { ElementsType, FormElement, FormElementInstance } from "../formElements" 

const type : ElementsType = "TextField"

export const TextFieldFormElement : FormElement = {
  type,
  construct: (id: string) => ({
    id, type,
    extraAttributes: {
      label: 'Text Fields',
      helperText: "helper",
      required: false,
      placeholder: "Value here..."
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "text fields"
  },

  designerComponent: () => <div>designer</div>,
  formComponent: () => <div>form</div>,
  propertiesComponent: () => <div>propertiesComponent</div>,
  validate: function (formElement: FormElementInstance, currentValue: string): boolean {
    throw new Error("Function not implemented.")
  }
}