
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const EnrollCTA = () => {
  const handleEnrollClick = () => {
    window.location.href = "https://learn.technetconsultancy.in/course/government-exams/government-exams/complete-government-exam-mastery/67d93fbf493d9f00123a79e2";
  };

  return (
    <div className="py-20 bg-gradient-to-r from-course-indigo/20 to-course-purple/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Your Journey Toward a Secure Government Career Today
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Join thousands of successful candidates who have secured government positions with our proven preparation methodology.
          </p>
          <Button 
            size="lg" 
            className="enroll-button-gradient text-white text-xl py-7 px-10"
            onClick={handleEnrollClick}
          >
            Enroll Now <ArrowRightIcon className="ml-2 h-6 w-6" />
          </Button>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-course-indigo">500+</p>
              <p className="text-gray-600">Video Lessons</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-course-blue">100%</p>
              <p className="text-gray-600">Syllabus Coverage</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-course-purple">24/7</p>
              <p className="text-gray-600">Access</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-course-teal">1000+</p>
              <p className="text-gray-600">Success Stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCTA;
