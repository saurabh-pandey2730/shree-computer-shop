
import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";


export function FooterComponent() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className="hover:text-white"/>
            <Footer.LinkGroup col className="hover:text-red-500">
              <Footer.Link href="#" className="hover:text-white">About</Footer.Link>
              <Footer.Link href="https://www.google.co.in/maps/place/27%C2%B014'57.0%22N+82%C2%B036'01.5%22E/@27.2493486,82.6025867,17.31z/data=!4m4!3m3!8m2!3d27.2491667!4d82.6004167?entry=ttu" className="hover:text-white  ">Careers</Footer.Link>
              <Footer.Link href="https://www.google.co.in/maps/@27.2493486,82.6025867,17.31z?entry=ttu" className="hover:text-white  ">Brand Center</Footer.Link>
              <Footer.Link href="https://maps.app.goo.gl/9unXzFXn4sHzLoND8" className="hover:text-white  ">Location</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Services" className="hover:text-white"/>
            <Footer.LinkGroup col className="hover:text-red-500">
              <Footer.Link href="#" className="hover:text-white">Computer Services</Footer.Link>
              <Footer.Link href="#" className="hover:text-white">Laptop Seller</Footer.Link>
              <Footer.Link href="#" className="hover:text-white">Computer Parts Exporter</Footer.Link>
              <Footer.Link href="#" className="hover:text-white">Laptop Rental</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className="hover:text-white"/>
            <Footer.LinkGroup col className="hover:text-red-500">
              <Footer.Link href="tel:8882525062" className="hover:text-white">Call</Footer.Link>
              <Footer.Link href="mailto:shreecomputershopnoida@gmail.com
         ?subject=Saying%20hello%20from%20User" className="hover:text-white">Email</Footer.Link>
              <Footer.Link href="https://wa.me/+918882525062" className="hover:text-white">Whastapp</Footer.Link>
              <Footer.Link href="https://www.facebook.com/" className="hover:text-white">Facebook</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
          <div>
            <Footer.Title title="legal" className="hover:text-white"/>
            <Footer.LinkGroup col className="hover:text-red-500">
              <Footer.Link href="#" className="hover:text-white">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="hover:text-white">Licensing</Footer.Link>
              <Footer.Link href="#" className="hover:text-white">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
       
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Saurabh Pandey" year={2024} className="hover:text-white"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center  ">
            <Footer.Icon href="#" icon={BsFacebook} className="text-blue-600 hover:text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-red-800 hover:text-white" />
            <Footer.Icon href="#" icon={BsWhatsapp} className="text-green-500 hover:text-white " />
            <Footer.Icon href="https://github.com/saurabh-pandey2730" icon={BsGithub} className="text-white " />
            <Footer.Icon href="tel:8882525062" icon={FaPhoneAlt } className="text-blue-500 hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
