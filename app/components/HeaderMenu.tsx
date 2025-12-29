"use client";

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/config/site";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function HeaderMenu() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton
            className={
              instrument.className +
              " bg-[var(--background)] hover:bg-[var(--accent)]/25 text-2xl border border-[var(--accent)] rounded-full p-1 aspect-square w-12 focus:outline-none z-50"
            }
          >
            {siteConfig.common.initials}
          </MenuButton>

          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <MenuItems
              anchor="bottom"
              className={
                instrument.className +
                " mt-4 p-4 flex flex-col gap-2 rounded-lg border border-[var(--accent)] bg-[var(--background)] focus:outline-none"
              }
            >
              <MenuItem>
                <Link
                  className="data-focus:border-b transition-all"
                  href="/#home"
                >
                  home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="data-focus:border-b transition-all"
                  href="/#about"
                >
                  about
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="data-focus:border-b transition-all"
                  href="/#world"
                >
                  world
                </Link>
              </MenuItem>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
}
