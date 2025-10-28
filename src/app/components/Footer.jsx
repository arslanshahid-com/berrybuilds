import Image from "next/image";

import footerLogo from "/public/footer-logo.png";
function Footer() {
  return (
    <div className="bg-[#0A0917] py-5 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-10 my-10">
          <div className="footer-widget">
            <div className="footer-logo flex gap-5 items-center">
              <Image
                src={footerLogo}
                alt="BerryBuilds Footer Logo"
                width={60}
                height={60}
                priority
              />
              <p className="text-white text-xl font-bold">BerryBuilds</p>
            </div>
            <p className="pt-5 text-gray-300">
              Discover, Connect, Build Show student innovation worldwise
            </p>
          </div>

          <div className="footer-widget">
            <h2 className="text-2xl pb-5">Platform</h2>
            <ul className="text-gray-300 ">
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Browse Project
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Upload Project
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h2 className="text-2xl pb-5">Company</h2>
            <ul className="text-gray-300 ">
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h2 className="text-2xl pb-5">Follow</h2>
            <ul className="text-gray-300 flex gap-5">
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-white transition" href="#">
                  Linkdin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right flex">
          <p>@2025 BerryBuilds. All right reserved</p>
          <div className="ml-auto">
            <ul className="text-gray-300 flex gap-5">
              <li>
                <a className="hover:text-white transition" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
