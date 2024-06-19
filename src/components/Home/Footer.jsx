
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="https://www.google.co.in/maps/place/27%C2%B014'57.0%22N+82%C2%B036'01.5%22E/@27.2493486,82.6025867,17.31z/data=!4m4!3m3!8m2!3d27.2491667!4d82.6004167?entry=ttu">Careers</Footer.Link>
              <Footer.Link href="https://www.google.co.in/maps/@27.2493486,82.6025867,17.31z?entry=ttu">Brand Center</Footer.Link>
              <Footer.Link href="https://maps.app.goo.gl/9unXzFXn4sHzLoND8">Location</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Services" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Computer Services</Footer.Link>
              <Footer.Link href="#">Laptop Seller</Footer.Link>
              <Footer.Link href="#">Computer Parts Exporter</Footer.Link>
              <Footer.Link href="#">Laptop Rental</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="tel:9415863967">Call</Footer.Link>
              <Footer.Link href="mailto:saurabh.k.pandey2018@example.com
         ?subject=Saying%20hello%20from%20User">Email</Footer.Link>
              <Footer.Link href="https://wa.me/9415863967">Whastapp</Footer.Link>
              <Footer.Link href="https://www.facebook.com/">Facebook</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
       
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Saurabh Pandey" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
