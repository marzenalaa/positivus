import illustration from "../assets/Illustration.png";
import logo from "../assets/logo.png";
import lightLogo from "../assets/light-logo.png";
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
import personOne from "../assets/person-1.png";
import personTwo from "../assets/person-2.png";
import personThreee from "../assets/person-3.png";
import personFour from "../assets/person-4.png";
import personFive from "../assets/person-5.png";
import personSix from "../assets/person-6.png";
import linkedin from "../assets/linkedin.png";
import linked from "../assets/linked.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import contactImage from "../assets/contact-illustration.png";

export const assets = {
  illustration,
  logo,
  lightLogo,
  amazon,
  dribbble,
  hubspot,
  notion,
  zoom,
  linkedin,
  contactImage,
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

export const company = {
  title: " Navigating the digital landscape for success",
  description:
    "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
};

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

export const studies = {
  title: "Case Studies",
  subTitle:
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  studiesList: [
    {
      id: 1,
      title: "Case Study 1",
      subTitle:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      title: "Case Study 2",
      subTitle:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      title: "Case Study 3",
      subTitle:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ],
};

export const workingProcess = {
  title: "Our Working Process",
  subTitle: "Step-by-Step Guide to Achieving Your Business Goals",
  processList: [
    {
      id: 1,
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      description:
        "We conduct in-depth research to analyze your industry, competitors, and target audience. Based on this research, we develop a customized strategy designed to meet your specific business objectives.",
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "Our team executes the agreed-upon strategy, implementing campaigns and initiatives across relevant channels. We ensure all elements align with your brand and target audience.",
    },
    {
      id: 4,
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor the performance of your campaigns using analytics and key metrics. Based on insights, we optimize for better results, ensuring maximum return on investment.",
    },
    {
      id: 5,
      title: "Reporting and Communication",
      description:
        "We provide detailed reports on the progress and performance of your campaigns. Our team maintains clear communication to keep you informed every step of the way.",
    },
    {
      id: 6,
      title: "Continual Improvement",
      description:
        "As your business grows, we refine and enhance our strategies to ensure ongoing success. Our commitment to continual improvement means we’re always looking for ways to better serve your needs.",
    },
  ],
};

export const team = {
  title: "Team",
  subTitle:
    "Meet the skilled and experienced team behind our successful digital marketing strategies",
  teamList: [
    {
      name: "Ali Mohammed",
      position: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: personOne,
    },
    {
      name: "Ahmed Hassan",
      position: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: personTwo,
    },
    {
      name: "Amir Ali",
      position: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: personThreee,
    },
    {
      name: "Mohammed Ahmed",
      position: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: personTwo,
    },
    {
      name: "Youcef Bilal",
      position: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: personThreee,
    },
    {
      name: "Omar Abdelkader",
      position: "Content Creator",
      description:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
      image: personOne,
    },
  ],
};

export const testimonials = {
  title: "Testimonials",
  subTitle:
    "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
  testimonialsList: [
    {
      name: "John Doe",
      position: "Marketing Director at XYZ Corp",
      image: personFour,
      description:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "Jane Doe",
      position: "Marketing Director at XYZ Corp",
      image: personFive,
      description:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
      image: personSix,
      description:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
  ],
};

export const contact = {
  title: "Contact Us",
  subTitle: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
};

export const footer = {
  title: "Footer",
  email: "info@positivus.com",
  phone: "555-666-777",
  address: "1234 Main St Moonstone City, Stardust State 12345.",
  socialMediaList: [
    {
      name: "Facebook",
      link: "#",
      image: facebook,
    },
    {
      name: "Twitter",
      link: "#",
      image: twitter,
    },
    {
      name: "LinkedIn",
      link: "#",
      image: linked,
    },
  ],
};
