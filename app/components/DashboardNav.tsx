"use client";

import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export function DahsboardNav() {
  const pathname = usePathname();

  return (
    <div className="grid gap-2">
      {navItems.map((nav) => {
        return (
          <Link key={nav.name} href={nav.href}>
            <span
              className={cn(
                `flex items-center gap-2 text-sm font-medium hover:bg-accent rounded-md  px-3 py-2 transition-all duration-300 ${
                  pathname == nav.href && "bg-accent"
                }`
              )}
            >
              <nav.icon className="h-4 w-4" />
              {nav.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
