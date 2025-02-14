import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Advancing Women's Health Through Innovation.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/about"
              className="mx-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="mx-3 font-bold hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
