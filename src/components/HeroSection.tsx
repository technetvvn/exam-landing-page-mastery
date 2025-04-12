
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="hero-gradient py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                <span className="text-course-indigo">Complete</span> Government Exam Mastery
                <span className="block text-3xl md:text-4xl mt-2 text-course-blue">SSC / Banking / Railways</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master multiple government exams with our comprehensive 500+ video lessons, expert-crafted content, and strategic approach. Join thousands of successful candidates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="enroll-button-gradient text-white text-lg py-6 px-8"
                  onClick={() => window.location.href = "https://learn.technetconsultancy.in/course/government-exams/government-exams/complete-government-exam-mastery/67d93fbf493d9f00123a79e2"}
                >
                  Enroll Now <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-course-indigo border-course-indigo text-lg py-6 px-8"
                  onClick={() => scrollToSection('curriculum')}
                >
                  View Curriculum
                </Button>
              </div>
              <div className="mt-8 flex items-center text-gray-500">
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-course-blue rounded-full">
                  Hindi
                </span>
                <span className="mr-4">Course Language</span>
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 fill-current mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </span>
                <span className="ml-2">4.9 (1.2k+ reviews)</span>
              </div>
            </div>
            <div className="relative w-full lg:w-2/5 animate-float">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <img 
                  src="/lovable-uploads/1e01f562-8ee5-400f-ab1d-f848c5a983e1.png" 
                  alt="Government Exam Preparation" 
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-course-indigo/10 text-course-indigo px-3 py-1 rounded-full text-sm font-medium">
                    500+ Video Lessons
                  </div>
                  <div className="bg-course-blue/10 text-course-blue px-3 py-1 rounded-full text-sm font-medium">
                    Comprehensive eBooks
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="bg-course-purple/10 text-course-purple px-3 py-1 rounded-full text-sm font-medium">
                    Practice Tests
                  </div>
                  <div className="bg-course-green/10 text-course-green px-3 py-1 rounded-full text-sm font-medium">
                    Latest Pattern
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
