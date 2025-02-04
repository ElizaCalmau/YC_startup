import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
export const Navbar = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex just items-center">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={144} height={30} />
          </Link>
          <div className="flex items-center gap-5">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create Startup</span>
                </Link>
                <SignOut />
                <Link href={`/user/${session.user.id}`}>
                  {session?.user.name}
                </Link>
              </>
            ) : (
              <SignIn />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};
