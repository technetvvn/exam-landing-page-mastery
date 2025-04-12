
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">TechNet Consultancy</h2>
            <p className="mb-4 text-gray-300 max-w-md">
              Empowering students to achieve success in government exams through comprehensive courses, expert guidance, and innovative learning methodologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TechNetConsultancy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/technetconsultancy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/technetconsultancy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Course</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#curriculum" className="text-gray-300 hover:text-white">Curriculum</a></li>
              <li><a href="#faqs" className="text-gray-300 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: hello@technetconsultancy.in</li>
              <li>Phone: +91 7984052966</li>
              <li>Address: Anand, Gujarat</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechNet Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
