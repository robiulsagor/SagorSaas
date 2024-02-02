import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { UserNav } from "./UserNav";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLogged = await isAuthenticated();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Sagor<span className="text-primary">Saas</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-5">
          <ThemeToggle />

          <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-5">
            {isLogged ? (
              <UserNav
                name={user.given_name + " " + user.family_name}
                image={user.picture}
                email={user.email}
              />
            ) : (
              <>
                <LoginLink>
                  <Button>Login </Button>
                </LoginLink>
                <RegisterLink>
                  <Button variant="secondary">Register </Button>
                </RegisterLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
