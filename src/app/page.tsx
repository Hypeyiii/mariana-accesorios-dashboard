import LoginForm from "@/components/dashboard/login-form";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col gap-2 w-full h-screen justify-center items-center m-auto text-center bg-[#212529]">
        <LoginForm />
      </section>
    </>
  );
}
