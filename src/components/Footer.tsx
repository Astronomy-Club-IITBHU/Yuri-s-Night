import React from "react";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react"; // ✅ Import icons

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold">Contact Us</p>
        <p>
          Email:{" "}
          <a
            href="mailto:astronomyclub.iitbhu@gmail.com"
            className="text-blue-400 hover:underline"
          >
            astronomyclub.iitbhu@gmail.com
          </a>
        </p>
        <p>Address: IIT BHU, Varanasi, India</p>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/astro.iitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/school/iitbhu-varanasi/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/yuris.night/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://medium.com/tag/iit-bhu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition duration-300"
          >
            <Globe size={24} />{" "}
            {/* Globe used as Medium doesn’t have a direct logo */}
          </a>
        </div>

        <p className="mt-4 text-sm opacity-70">
          © 2025 Yuri's Night. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
