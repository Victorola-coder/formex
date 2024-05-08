import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/formBuilder";

export default async function Builder({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error("form not found");
  }
  return <div>
    <FormBuilder form={form} />
  </div>;
}
