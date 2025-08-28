"use client"

import { TranslateIcon, MenuIcon, EthanmontLogo } from '../tools/handleIcons';

const Navbar = () => {
  const navLinks = [
    { display: "About me", href: "#" },
    { display: "Projects", href: "#" },
    { display: "Expertises", href: "#" },
    { display: "Services", href: "#" },
    { display: "Contact", href: "#" },
  ];

  const NavLinks = () => (
    <div className="glass font-sans rounded-full">
      <ul className="flex items-center gap-2 sm:gap-5 text-[clamp(12px,1vw,50px)] p-3 px-5 lg:px-8 text-foreground">
        {navLinks.map((link) => (
          <li key={link.display} className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
            {link.display}
          </li>
        ))}
      </ul>
    </div>
  );

  const LanguageSwitch = () => {
    return (
      <div className="glass font-sans rounded-full m-1 p-1">
        <div className="relative">
          <input
            id="language-toggle"
            alt='Language toggle'
            type="checkbox"
            className="peer absolute invisible"
          />
          <label
            htmlFor="language-toggle"
            className="block relative cursor-pointer outline-none select-none p-2 w-20 h-8 bg-gray-200 dark:bg-transparent rounded-full
                     before:block before:absolute before:content-[''] before:top-[2px] before:left-[2px] before:bottom-[2px] before:right-[2px] before:rounded-full
                     after:block after:absolute after:content-[''] after:top-[2px] after:left-[2px] after:bottom-[2px] after:w-[40px] after:bg-terracota after:rounded-full after:transition-transform after:duration-200
                     peer-checked:after:translate-x-[36px]"
          />
          <span
            className="absolute top-2 pointer-events-none font-sans font-black text-xs uppercase text-center w-1/2 left-0 pl-1 text-background
                     peer-checked:text-gray-700 dark:peer-checked:text-foreground"
          >
            ES
          </span>
          <span
            className="absolute top-2 pointer-events-none font-sans font-black text-xs uppercase text-center w-1/2 right-0 pr-1 text-foreground
                     peer-checked:text-gray-700 dark:peer-checked:text-background"
          >
            EN
          </span>
        </div>
      </div>
    );
  };

  const MobileNav = () => (
    <div className='glass flex justify-between rounded-full px-5 py-1 place-items-center'>
      <EthanmontLogo className="h-[clamp(1rem,3vw,1.2rem)] w-auto text-foreground" fill="currentColor" />
      <div className='flex place-items-center gap-2'>
        <TranslateIcon className="h-[clamp(1.2rem,3vw,1.2rem)] w-auto text-foreground" fill="currentColor" />
        <MenuIcon className="h-[clamp(2rem,3vw,1.2rem)] w-auto text-foreground" fill="currentColor" />
      </div>
    </div>
  );

  return (
    <nav className='flex md:flex-row items-center justify-between gap-4 py-2'>

        {/* Mobile/Tablet Navigation */}
        <div className='md:hidden w-full px-5 items-center'>
            <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex md:items-center md:justify-between md:w-full md:gap-6 px-5'>
            <EthanmontLogo className="h-[clamp(1rem,3vw,1.4rem)] w-auto text-foreground" fill="currentColor" />
            <NavLinks />
            <LanguageSwitch />
        </div>
    </nav>
  );
};

export default Navbar;