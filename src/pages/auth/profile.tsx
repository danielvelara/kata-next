import { signIn, signOut, useSession } from "next-auth/react";
type Props = {};
export default function Profile({}: Props) {
  //   const { data: session } = useSession();
  //   if (session) {
  //     return (
  //       <>
  //         <p>
  //           Signed in as {session.user?.name} = {session.user?.email}
  //         </p>
  //         <br />
  //         <button onClick={() => signOut}>Sign out</button>
  //       </>
  //     );
  //   }
  return (
    <div className="grid grid-cols-3 justify-evenly bg-slate-500">
      <div>First</div>
      <div>Second</div>
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </div>
  );
}
