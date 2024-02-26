import { Cog, Globe, HomeIcon } from "lucide-react";

type AdditionalLinks = {
  title: string;
};

export const defaultLinks = [
  { href: "/w", title: "Home", icon: HomeIcon },
  { href: "/account", title: "Account", icon: Cog },
  { href: "/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
