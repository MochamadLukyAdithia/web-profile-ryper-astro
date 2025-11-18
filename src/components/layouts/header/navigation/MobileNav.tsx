import { NavItem } from "./NavItem";
import { Globe, House, Users, BookOpen, Package } from "lucide-react";

export const MobileNav = () => {
  return (
    <nav className="space-y-6">
      <NavItem Icon={House} nameRoute="Home" destinationRoute="/" />
      <NavItem Icon={Globe} nameRoute="Blog" destinationRoute="/blogs" />
      <NavItem Icon={Users} nameRoute="About" destinationRoute="/about" />
      <NavItem Icon={BookOpen} nameRoute="Material" destinationRoute="/material" />
      <NavItem Icon={Package} nameRoute="Produk" destinationRoute="/produk" />
    </nav>
  );
};
