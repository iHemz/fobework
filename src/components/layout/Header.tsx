"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { AlignJustify, X } from "lucide-react";
import { Avatar } from "@/components/layout/Avatar";
import { Logo } from "@/components/layout/Logo";
import { NavLinks } from "@/components/layout/NavLinks";
import useDisclosure from "@/hooks/useDisclosure";
import useRouterWithLoader from "@/hooks/useRouterWithLoader";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Transactions", href: "/transactions" },
  { name: "Payment", href: "/payment" },
  { name: "Plan", href: "/plan" },
  { name: "Cards", href: "/cards" },
];

export default function Header() {
  const router = useRouterWithLoader();
  const { isOpen, open, close } = useDisclosure();

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between px-6 backdrop-blur-md">
      <Logo />

      <section id="desktop-navlinks" className="hidden md:block">
        <NavLinks navlinks={navigation} pathName={router.pathName} />
      </section>

      <section id="mobile-navlinks" className="flex md:hidden">
        <button onClick={open}>
          <AlignJustify />
        </button>
        <Dialog open={isOpen} onClose={close} className="md:hidden">
          <div className="fixed inset-0 z-100" />
          <DialogPanel className="fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-full flex-col">
              <header className="flex items-center justify-between">
                <Logo />
                <button onClick={close}>
                  <X />
                </button>
              </header>
              <div className="flex-1 mt-6">
                <NavLinks navlinks={navigation} pathName={router.pathName} onClick={close} />
              </div>
              <div className="mt-auto pt-6">
                <Avatar />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </section>

      <section className="hidden md:flex items-center space-x-4">
        <button
          type="button"
          className="rounded-full bg-card-bg p-2 text-gray-400 hover:text-gray-300"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Avatar />
      </section>
    </header>
  );
}
