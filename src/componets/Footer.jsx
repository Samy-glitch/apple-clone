import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            or <span className="underline text-blue">other retailer </span>
            near you. Or call 666-3629
          </p>
        </div>
        <div className="bg-neutral-500 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
        <p className="font-semibold text-gray text-xs">
          Created by{" "}
          <a
            href="https://samy0.netlify.app/"
            target="_blank"
            className="underline text-blue cursor-pointer"
          >
            Samy
          </a>{" "}
        </p>
        <p className="font-semibold text-gray text-xs">
          Github{" "}
          <a
            href="https://github.com/Samy-glitch/apple-clone"
            target="_blank"
            className="underline text-blue cursor-pointer"
          >
            Repository
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
