import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 m-10 container">
      <div className=" px-6 py-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Contact Us</h5>
            <p className="my-3 text-white text-sm">Email: info@example.com</p>
            <p className="my-3 text-white text-sm">Phone: 123-321-5555</p>
            <p className="my-3 text-white text-sm">Address: road-123,house-3/2, Gulshan , Dhaka-1212</p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Links</h5>
            <ul className="list-none">
              <li className="my-3"><a href="/" className="text-white hover:text-gray-300 text-sm">Home</a></li>
              <li className="my-3"><a href="/about" className="text-white hover:text-gray-300 text-sm">About</a></li>
              <li className="my-3"><a href="/services" className="text-white hover:text-gray-300 text-sm">Services</a></li>
              <li className="my-3"><a href="/blog" className="text-white hover:text-gray-300 text-sm">Blog</a></li>
              <li className="my-3"><a href="/contact" className="text-white hover:text-gray-300 text-sm">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Follow Us</h5>
            <ul className="list-none">
              <li className="my-3"><a href="https://www.facebook.com/example" className="text-white hover:text-gray-300 text-sm">Facebook</a></li>
              <li className="my-3"><a href="https://twitter.com/example" className="text-white hover:text-gray-300 text-sm">Twitter</a></li>
              <li className="my-3"><a href="https://www.instagram.com/example" className="text-white hover:text-gray-300 text-sm">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <p className="text-white">© 2023 Inidan Chef Project</p>
            <div className="flex items-center">
              <a className="text-white px-3 py-2" href="/">Home</a>
              <a className="text-white px-3 py-2" href="/about">About</a>
              <a className="text-white px-3 py-2" href="/services">Services</a>
              <a className="text-white px-3 py-2" href="/blog">Blog</a>
              <a className="text-white px-3 py-2" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;