"use client"

import { Form } from "@prisma/client"
import PreviewDialogBtn from "./previewDialogBtn"
import Designer from "./designer"

export default function FormBuilder ({form}: {form: Form}){
    return <>
     <main className="flex flex-col w-full">
        <nav className="flex flex-row justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {/* {!form.published && (
              <>
                <SaveFormBtn id={form.id} />
                <PublishFormBtn id={form.id} />
              </>
            )} */}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
    </>
}