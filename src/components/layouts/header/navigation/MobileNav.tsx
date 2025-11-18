import { NavItem } from "./NavItem";
import { Globe, House, Users, BookOpen, Code2 } from "lucide-react";

export const MobileNav = () => {
  return (
    <nav className="space-y-6">
      <NavItem Icon={House} nameRoute="Home" destinationRoute="/" />
      <NavItem Icon={Globe} nameRoute="Blog" destinationRoute="/blogs" />
      <NavItem Icon={Users} nameRoute="About" destinationRoute="/about" />
      <NavItem Icon={BookOpen} nameRoute="Material" destinationRoute="/material" />
      <NavItem Icon={Code2} nameRoute="Produk" destinationRoute="/product" />
    </nav>
  );
};
