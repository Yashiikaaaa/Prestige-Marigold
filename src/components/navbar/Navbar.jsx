import { useEffect, useState } from "react";
import { Phone, Xmark, MenuScale } from "iconoir-react";
import logo from "../../assets/home/prestige authorise cp.png";
import arrow from "../../assets/navbar/whitearrow.png";

/* =======================
   Banner Component
======================= */
export const Banner = ({ setContactModal }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isBannerVisible) return null;

  return (
    <div className="w-full bg-black text-white flex items-center justify-center gap-4 px-4 py-1 relative h-[36px]">
      <span className="font-semibold text-[13px] md:text-[15px]">
        Exclusive Pre-launch price and offers
      </span>

      <div
        className="flex items-center gap-1 cursor-pointer hover:underline"
        onClick={() => setContactModal(true)}
      >
        <span className="font-semibold text-[13px] md:text-[15px]">
          Get it now
        </span>
        <img src={arrow} alt="" className="w-4 h-3" />
      </div>

      {!isMobile && (
        <button
          className="absolute right-4"
          onClick={() => setIsBannerVisible(false)}
        >
          <Xmark className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

/* =======================
   Navbar Component
======================= */
export const Navbar = ({ setContactModal }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "Overview", href: "#Overview" },
    { name: "Pricing", href: "#Pricing" },
    { name: "Master Plan", href: "#MasterPlan" },
    { name: "Location", href: "#Location" },
    { name: "Amenities", href: "#Amenities" },
    { name: "Gallery", href: "#Gallery" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <Banner setContactModal={setContactModal} />

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[72px]">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Prestige"
              className="h-12 md:h-14 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wide text-black hover:text-PrestigeBrown transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Call Button (Desktop) */}
          <div className="hidden lg:flex">
            <a
              href="tel:+919353329893"
              className="flex items-center gap-2 bg-PrestigeBrown text-white px-4 py-2 rounded-lg shadow hover:bg-opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              93533 29893
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <Xmark className="w-7 h-7" />
            ) : (
              <MenuScale className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileNavOpen && (
          <div className="lg:hidden bg-white border-t">
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className="text-sm font-semibold uppercase text-black hover:text-PrestigeBrown transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <a
                href="tel:+919353329893"
                className="mt-4 flex items-center gap-2 bg-PrestigeBrown text-white px-6 py-3 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
