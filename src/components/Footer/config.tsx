import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.metaworth.exchange/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@metaworth",
      },
      {
        label: "Community",
        href: "https://docs.metaworth.exchange/contact-us/communities",
      },
      {
        label: "MetaWorth Token",
        href: "https://docs.metaworth.exchange/tokenomics/mtw-token",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://shop.metaworth.exchange/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.metaworth.exchange/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.metaworth.exchange/click-here-for-help/troubleshooting-errors",
      },
      {
        label: "Guides",
        href: "https://docs.metaworth.exchange/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/metaworth/metaworth/blob/main/mtw.sol",
      },
      {
        label: "Documentation",
        href: "https://docs.metaworth.exchange/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.metaworth.exchange/developers/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.metaworth.exchange/",
      },
      {
        label: "Careers",
        href: "https://docs.metaworth.exchange/careers/hiring",
      },
    ],
  },
];

export const socials = [
  // {
  //   label: "Facebook",
  //   icon: "Facebook",
  //   href: "https://facebook.com/metaworth",
  // },
  // {
  //   label: "Twitter",
  //   icon: "Twitter",
  //   href: "https://twitter.com/metaworth_exchange",
  // },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/metaworth_exchange",
  },
  {
    label: "Email",
    icon: "Email",
    href: "mailto:management@metaworth.exchange",
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://reddit.com/r/MetaworthExchange",
  // },
  // {
  //   label: "Instagram",
  //   icon: "Instagram",
  //   href: "https://instagram.com/metaworth",
  // },
  // {
  //   label: "Github",
  //   icon: "Github",
  //   href: "https://github.com/metaworth/metaworth/blob/main/mtw.sol",
  // },
  // {
  //   label: "Discord",
  //   icon: "Discord",
  //   href: "https://discord.com/channels/929639207721373757/929639965942505523",
  // },
  // {
  //   label: "Medium",
  //   icon: "Medium",
  //   href: "https://medium.com/@metaworth",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
