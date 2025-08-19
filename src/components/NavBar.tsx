import { TranslateIcon, MenuIcon, EthanmontLogo } from '../tools/handleIcons';

const Navbar = () => {
  const navLinks = [
    { display: "About me" },
    { display: "Projects" },
    { display: "Expertises" },
    { display: "Services" },
    { display: "Contact" },
  ];

  const NavLinks = () => (
    <div className="glass font-sans rounded-full">
      <ul className="flex items-center gap-2 sm:gap-5 text-sm py-3 px-4 sm:px-10 dark:text-white">
        {navLinks.map((link) => (
          <li key={link.display} className="cursor-pointer hover:font-bold">
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
            type="checkbox"
            className="peer absolute invisible"
          />
          <label
            htmlFor="language-toggle"
            className="block relative cursor-pointer outline-none select-none p-2 w-20 h-8 bg-gray-200 dark:bg-transparent rounded-full
                     before:block before:absolute before:content-[''] before:top-[2px] before:left-[2px] before:bottom-[2px] before:right-[2px] before:rounded-full
                     after:block after:absolute after:content-[''] after:top-[2px] after:left-[2px] after:bottom-[2px] after:w-[40px] after:bg-white after:rounded-full after:transition-all after:duration-200"
          />
          <span
            className="absolute top-2 pointer-events-none font-sans font-black text-xs uppercase text-center w-1/2 left-0 pl-1 text-black
                     peer-checked:text-gray-700 dark:peer-checked:text-white"
          >
            ES
          </span>
          <span
            className="absolute top-2 pointer-events-none font-sans font-black text-xs uppercase text-center w-1/2 right-0 pr-1 text-white
                     peer-checked:text-gray-700 dark:peer-checked:text-black"
          >
            EN
          </span>
          <style>{`
            #language-toggle:checked + label:after {
              margin-left: 36px;
            }
          `}</style>
        </div>
      </div>
    );
  };

  const MobileNav = () => (
    <div className='glass flex justify-between rounded-full px-5 place-items-center'>
      <EthanmontLogo className="h-5 w-auto" fill="white" />
      <div className='flex place-items-center gap-2'>
        <TranslateIcon className="h-6 w-auto" fill="white" />
        <MenuIcon className="h-10 w-auto" fill="white" />
      </div>
    </div>
  );

  return (
    <nav className='flex md:flex-row items-center justify-between gap-4 py-2'>

        {/* Mobile/Tablet Navigation */}
        <div className='lg:hidden w-full px-5 items-center'>
            <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:gap-6 px-5'>
            <EthanmontLogo className="h-6 w-auto" fill="white" />
            <NavLinks />
            <LanguageSwitch />
        </div>
    </nav>
  );
};

export default Navbar;