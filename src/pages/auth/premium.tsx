import { signOut, useSession } from "next-auth/react";

type Props = {};
export default function Premium({}: Props) {
  //   const { data: session, status } = useSession();
  //   if (status == "loading") {
  //     return <p>Loading</p>;
  //   }
  //   if (session == null) {
  //     return <p>Denied</p>;
  //   }
  return (
    <div>
      {/* <button onClick={() => signOut()}>Sign out</button> */}
      <p>Secret content</p>
    </div>
  );
}
