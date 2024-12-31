import illustration from "../assets/illustration.png";
import logo from "../assets/logo.png";
import amazon from "../assets/amazon.png";
import dribbble from "../assets/dribbble.png";
import hubspot from "../assets/hubspot.png";
import notion from "../assets/notion.png";
import zoom from "../assets/zoom.png";
import analytics from "../assets/analytics.png";
import contentCreation from "../assets/content-creation.png";
import emailMarketing from "../assets/email-marketing.png";
import payPerClick from "../assets/pay-per-click.png";
import searchEngine from "../assets/search-engine.png";
import socialMarketing from "../assets/social-marketing.png";
import service from "../assets/service.png";

export const assets = {
  illustration,
  logo,
  amazon,
  dribbble,
  hubspot,
  notion,
  zoom,
};

export const links = [
  {
    name: "About us",
    link: "#About",
    href: "#About",
  },
  {
    name: "Services",
    link: "#Services",
    href: "#Services",
  },
  {
    name: "Use Cases",
    link: "#use-cases",
    href: "#Use Cases",
  },
  {
    name: "Pricing",
    link: "#Pricing",
    href: "#Pricing",
  },
  {
    name: "Blog",
    link: "#Blog",
    href: "#Blog",
  },
];

export const companies = [
  {
    name: "Amazon",
    logo: amazon,
  },
  {
    name: "Dribbble",
    logo: dribbble,
  },
  {
    name: "Hubspot",
    logo: hubspot,
  },
  {
    name: "Notion",
    logo: notion,
  },
  {
    name: "Zoom",
    logo: zoom,
  },
];

export const services = {
  title: "Services",
  subTitle:
    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  ctaTitle: "Let’s make things happen",
  ctaSubTitle:
    "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  ctaButtonText: "Get your free proposal",
  image: service,
  servicesList: [
    {
      name: "Search Engine Optimisation",
      image: searchEngine,
      className: "bg-gray-200",
      titleStyle: "bg-limeGreen px-2 rounded-md",
      linkStyle: "",
    },
    {
      name: "Pay-per-click advertising",
      image: payPerClick,
      className: "bg-limeGreen",
      titleStyle: "bg-white px-2 rounded-md",
      linkStyle: "",
    },
    {
      name: "Social Media Marketing",
      image: socialMarketing,
      className: "bg-deepNavy",
      titleStyle: "bg-white px-2 rounded-md",
      linkStyle: "text-white",
    },
    {
      name: "Email Marketing",
      image: emailMarketing,
      className: "bg-gray-200",
      titleStyle: "bg-limeGreen px-2 rounded-md",
    },
    {
      name: "Content Creation",
      image: contentCreation,
      className: "bg-limeGreen",
      titleStyle: "bg-white px-2 rounded-md",
    },
    {
      name: "Analytics and Tracking",
      image: analytics,
      className: "bg-deepNavy",
      titleStyle: "bg-limeGreen px-2 rounded-md",
      linkStyle: "text-white",
    },
  ],
};
