import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 m-10 container">
      
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