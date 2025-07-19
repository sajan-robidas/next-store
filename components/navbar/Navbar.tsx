import {Suspense} from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import ModeToggle from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <ModeToggle />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
