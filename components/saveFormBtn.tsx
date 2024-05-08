import { useTransition } from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
// import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { FaSpinner } from "react-icons/fa";


export default function SaveFormBtn(){
//     const { elements } = useDesigner();
//   const [loading, startTransition] = useTransition();

   
    return (
        <Button
        variant={"outline"}
        className="gap-2"
        // disabled={loading}
        // onClick={() => {
        //   startTransition(updateFormContent);
        // }}
      >
        <HiSaveAs className="h-4 w-4" />
        Save
        {/* {loading && <FaSpinner className="animate-spin" />} */}
      </Button>       
    )
}