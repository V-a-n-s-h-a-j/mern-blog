import {
  Footer,
  FooterTitle,
  FooterLinkGroup,
  FooterLink,
  FooterDivider,
  FooterCopyright,
  FooterIcon,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Logo Div */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Vanshaj's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:mt-4 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <Footer.LinkGroup col>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Me
                </FooterLink>
                <FooterLink href="/" target="_blank" rel="noopener noreferrer">
                  Vanshaj's Blog
                </FooterLink>
              </Footer.LinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" />
              <Footer.LinkGroup col>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
                <FooterLink href="/" target="_blank" rel="noopener noreferrer">
                  Reddit
                </FooterLink>
              </Footer.LinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <Footer.LinkGroup col>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </FooterLink>
                <FooterLink href="/" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </FooterLink>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="flex-col w-full sm:flex sm: items-center sm-justify-between">
          <FooterCopyright
            href="#"
            by="Vanshaj's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-5 sm: mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
