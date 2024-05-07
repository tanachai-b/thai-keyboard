import { usePathname, useRouter } from "next/navigation";

import { Icon, IconButton } from "./common";

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={`flex flex-wrap px-2.5 ${className}`}>
      <IconButton
        icon={<Icon className="text-xl" icon="keyboard" />}
        text="Keyboard"
        active={pathname === "/keyboard"}
        onClick={() => router.push("/keyboard")}
      />

      <div className="grow" />
    </nav>
  );
}
