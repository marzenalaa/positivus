import { contact, assets } from "../constants";
import Button from "./ui/Button";
import Title from "./ui/Title";

const Contact = () => {
  const { title, subTitle } = contact;
  const { contactImage } = assets;

  return (
    <section className="h-full my-20" id="Contact">
      <Title mainTitle={title} subTitle={subTitle} />
      <div className="relative bg-gray-100 rounded-3xl p-12 my-12 flex flex-col md:flex-row justify-between items-center">
        <form className="w-full md:w-2/3">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="mt-1 block w-full py-2 px-3 border border-blackDark rounded-md shadow-sm focus:outline-none focus:border-limeGreen focus:ring-2 focus:ring-limeGreen sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="mt-1 block w-full py-2 px-3 border border-blackDark rounded-md shadow-sm focus:outline-none focus:border-limeGreen focus:ring-2 focus:ring-limeGreen sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="mt-1 block w-full py-2 px-3 border border-blackDark rounded-md shadow-sm focus:outline-none focus:border-limeGreen focus:ring-2 focus:ring-limeGreen sm:text-sm"
              ></textarea>
            </div>
            <div>
              <Button
                text="Send Message"
                href="#"
                className="bg-blackDark text-white mt-8 w-full md:w-64"
              />
            </div>
          </div>
        </form>
        <img
          src={contactImage}
          alt="Contact Illustration"
          className="hidden md:block absolute right-0 w-60"
        />
      </div>
    </section>
  );
};

export default Contact;
