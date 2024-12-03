import Image from "next/image";
import type React from "react";

import { Typography } from "@/typography";

import logo from "@/assets/images/slice.svg";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";

const menus = [
  {
    title: "MoneyOS",
    submenus: [
      {
        title: "Conciliate with MoneyOS",
        href: "/docs",
      },
      {
        title: "Orchestrate with MoneyOS",
        href: "/docs/installation",
      },
      {
        title: "Build with MoneyOS",
        href: "/docs/primitives/typography",
      },
    ],
  },
  {
    title: "Applications",
    submenus: [
      {
        title: "Credit Card Issuing Conciliation",
        href: "/docs",
      },
      {
        title: "Split Payments",
        href: "/docs/installation",
      },
      {
        title: "Marketplace Payouts",
        href: "/docs/primitives/typography",
      },
      {
        title: "Retail Conciliation",
        href: "/docs/primitives/typography",
      },
    ],
  },
  {
    title: "Industries",
    submenus: [
      {
        title: "Banks",
        href: "/docs",
      },
      {
        title: "Credit Card Issuers",
        href: "/docs/installation",
      },
      {
        title: "Marketplaces",
        href: "/docs/primitives/typography",
      },
      {
        title: "Retail",
        href: "/docs/primitives/typography",
      },
      {
        title: "Payments Processing",
        href: "/docs/primitives/typography",
      },
      {
        title: "E-commerce",
        href: "/docs/primitives/typography",
      },
      {
        title: "Franchising",
        href: "/docs/primitives/typography",
      },
      {
        title: "Health",
        href: "/docs/primitives/typography",
      },
    ],
  },
  {
    title: "Cases",
    submenus: [
      {
        title: "Banks",
        href: "/docs",
      },
      {
        title: "Credit Card Issuers",
        href: "/docs/installation",
      },
      {
        title: "Marketplaces",
        href: "/docs/primitives/typography",
      },
      {
        title: "Retail",
        href: "/docs/primitives/typography",
      },
      {
        title: "Payments Processing",
        href: "/docs/primitives/typography",
      },
      {
        title: "E-commerce",
        href: "/docs/primitives/typography",
      },
      {
        title: "Franchising",
        href: "/docs/primitives/typography",
      },
      {
        title: "Health",
        href: "/docs/primitives/typography",
      },
    ],
  },
  {
    title: "More",
    submenus: [
      {
        title: "Slice Lab",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="h-full">
      <div className="container mx-auto py-10 px-4 lg:px-0">
        <div className="flex">
          <div className="grow min-h-full flex lg:flex-col flex-row justify-between">
            <Image src={logo} alt="Money OS" width={210} height={61} />

            <div className="lg:mt-auto flex gap-2 fill-slice-purple items-center">
              <LinkedinIcon className="h-6 w-6" />
              <InstagramIcon className="h-7 w-7" />
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-5 gap-12 ml-auto">
            {menus.map((menu) => (
              <div className="flex flex-col" key={menu.title}>
                <Typography
                  variant="body"
                  className="text-primary text-sm font-semibold"
                >
                  {menu.title}
                </Typography>

                <ul className="text-sm text-slice-purple gap-2 flex flex-col mt-4">
                  {menu.submenus.map((submenu) => (
                    <li key={submenu.title}>
                      <a href={submenu.href}>{submenu.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden mt-8 grid gap-12 ml-auto">
          {menus.map((menu) => (
            <div className="flex flex-col" key={menu.title}>
              <Typography
                variant="body"
                className="text-primary text-sm font-semibold"
              >
                {menu.title}
              </Typography>

              <ul className="text-sm text-slice-purple gap-2 flex flex-col mt-4">
                {menu.submenus.map((submenu) => (
                  <li key={submenu.title}>
                    <a href={submenu.href}>{submenu.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-slice-line text-xs border-t border-slice-line py-4">
        <div className="container flex justify-between mx-auto flex-col lg:flex-row px-4 lg:px-0">
          <Typography variant="body" className="text-slice-line lg:text-xs">
            © Copyright 2024, All Rights Reserved by Slice Tecnologia da
            Informação Ltda.
          </Typography>
          <ul className="font-semibold flex items-center gap-4 mt-4 lg:mt-0">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
