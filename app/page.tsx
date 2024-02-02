import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <section className="h-[90vh] flex items-center justify-center bg-background">
      <div className="w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 md:px-12">
        <div className="text-center">
          <div>
            <div className="px-6 py-3 bg-secondary rounded-full w-max mx-auto">
              <span className="text-sm font-medium text-primary">
                Sort your notes easily
              </span>
            </div>

            <h1 className=" mt-8 tracking-tighter text-3xl font-extrabold lg:text-6xl">
              Create Notes with ease
            </h1>
            <p className="max-w-xl text-center mx-auto mt-8 text-secondary-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ab architecto minus sed quia excepturi veniam, sint
              illo adipisci voluptatum! Lorem
            </p>
          </div>
          <div className="flex justify-center mt-10 max-w-sm mx-auto">
            <RegisterLink>
              <Button className=" w-full" size="lg">
                Sign up for free
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
