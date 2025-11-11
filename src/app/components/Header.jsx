import Image from "next/image";
import berryLogo from "/public/main-logo.png";
import themelogo from "/public/theme-logo.png";
import Link from "next/link";
function Header() {
  return (
    <>
      <div className="main-header bg-black py-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between  gap-10">
            <div className="logo">
              <Link href="/">
                <Image
                  src={berryLogo}
                  alt="BerryBuilds Logo"
                  width={200}
                  height={200}
                  priority
                />
              </Link>
            </div>
            <div className="menu">
              <ul className="flex gap-10 text-gray-300">
                <li>
                  <a className="hover:text-white transition" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Browse
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Upload Project
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-contact">
              <div className="flex gap-10">
                <Image
                  src={themelogo}
                  alt="BerryBuilds Logo"
                  width={40}
                  priority
                />
                <button className="bg-blue-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded-full transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
