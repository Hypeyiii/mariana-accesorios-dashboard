import EditUser from "@/components/dashboard/edit-user-list";
import { getUserById } from "@/lib/data";

export default async function Edit({ params }: { params: { id: string } }) {
  const { id } = params;

  const user = await getUserById({ id });

  if (!user) {
    return <div>Usuario no encontrado</div>;
  }
  return (
    <div className="grid grid-cols-12 w-full md:w-[80%] m-auto p-2 md:p-5 gap-10">
      <EditUser user={user} />
    </div>
  );
}
