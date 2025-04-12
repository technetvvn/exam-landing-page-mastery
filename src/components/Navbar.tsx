
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-course-indigo">TechNet Consultancy</h1>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-course-indigo px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-course-indigo px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#curriculum" className="text-gray-700 hover:text-course-indigo px-3 py-2 rounded-md text-sm font-medium">Curriculum</a>
              <a href="#testimonials" className="text-gray-700 hover:text-course-indigo px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="#faqs" className="text-gray-700 hover:text-course-indigo px-3 py-2 rounded-md text-sm font-medium">FAQs</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              variant="default"
              className="bg-course-indigo hover:bg-course-indigo/90"
              onClick={() => window.location.href = "https://learn.technetconsultancy.in/course/government-exams/government-exams/complete-government-exam-mastery/67d93fbf493d9f00123a79e2"}
            >
              Enroll Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-course-indigo hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-course-indigo"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-course-indigo hover:bg-gray-100">Home</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-course-indigo hover:bg-gray-100">Features</a>
            <a href="#curriculum" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-course-indigo hover:bg-gray-100">Curriculum</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-course-indigo hover:bg-gray-100">Testimonials</a>
            <a href="#faqs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-course-indigo hover:bg-gray-100">FAQs</a>
            <div className="pt-2">
              <Button 
                variant="default"
                className="w-full bg-course-indigo hover:bg-course-indigo/90"
                onClick={() => window.location.href = "https://learn.technetconsultancy.in/course/government-exams/government-exams/complete-government-exam-mastery/67d93fbf493d9f00123a79e2"}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
