import { BookOpenIcon, BookIcon, ClockIcon, GlobeIcon, Laptop, UsersIcon } from "lucide-react";

const CourseDescription = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About This Course</h2>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              Complete Government Exam Mastery is the ultimate preparation resource for aspirants targeting prestigious government positions through SSC, Banking, and Railway examinations. Our comprehensive package includes over 500 in-depth video lessons covering every topic in the syllabus, detailed eBooks for reference and revision, and topic-wise practice tests to assess your progress.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Designed by experienced educators and successful candidates, our course breaks down complex concepts into easy-to-understand modules. Whether you're preparing for SSC CGL, IBPS PO, RRB NTPC, or any other government recruitment exam, our structured approach ensures complete coverage of all subjects including Quantitative Aptitude, Reasoning, English, General Awareness, and subject-specific topics.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start">
                <span className="bg-course-indigo/10 p-3 rounded-full mr-4">
                  <BookOpenIcon className="h-6 w-6 text-course-indigo" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">500+ Video Lessons</h3>
                  <p className="text-gray-600 mt-1">High-quality lessons with clear explanations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-course-blue/10 p-3 rounded-full mr-4">
                  <BookIcon className="h-6 w-6 text-course-blue" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive eBooks</h3>
                  <p className="text-gray-600 mt-1">For each topic with examples and shortcuts</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-course-purple/10 p-3 rounded-full mr-4">
                  <ClockIcon className="h-6 w-6 text-course-purple" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Topic-wise Tests</h3>
                  <p className="text-gray-600 mt-1">Practice tests with detailed solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-course-teal/10 p-3 rounded-full mr-4">
                  <GlobeIcon className="h-6 w-6 text-course-teal" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Updated Content</h3>
                  <p className="text-gray-600 mt-1">Aligned with the latest exam patterns</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-course-red/10 p-3 rounded-full mr-4">
                  <UsersIcon className="h-6 w-6 text-course-red" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Multilingual Support</h3>
                  <p className="text-gray-600 mt-1">For better understanding</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-course-yellow/10 p-3 rounded-full mr-4">
                  <Laptop className="h-6 w-6 text-course-yellow" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Multi-device Access</h3>
                  <p className="text-gray-600 mt-1">Learn anytime, anywhere</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-700 italic">
                "Join thousands of successful candidates who have secured government positions with our proven preparation methodology. Start your journey toward a secure government career today!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
