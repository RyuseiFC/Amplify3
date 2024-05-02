import AuthGetCurrentUserServer from "@/components/AuthGetCurrentUserServer";
import SignOutButton from "@/components/SignOutButton";

export default async function Todos() {
  return (
    <main>
      <AuthGetCurrentUserServer />
      <SignOutButton />
      {/* <TodosServer /> */}
    </main>
  );
}
