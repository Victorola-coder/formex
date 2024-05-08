"use client"
import { ElementsType, FormElement } from "../formElements"

 


const type : ElementsType = "TextField"

export const TextFieldFormElement : FormElement = {
    type,

    construct: (id: string) => ({
        id,
        type,
        extraAttributes,
      }),
      designerBtnElement: {
        icon: MdTextFields,
        label: "Text Field",
      },
      
    designerComponent : ()=> <div>designer</div>
}