import { GetFormById } from "@/actions/form";

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
  return <div>page</div>;
}
