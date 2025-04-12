
import { BookIcon, Brain, Clock, Database, Monitor, Users } from "lucide-react";

const CourseLearning = () => {
  const learnings = [
    {
      icon: BookIcon,
      title: "Quantitative Aptitude",
      description: "Master numbers, calculations, and data interpretation with proven shortcuts that cut your solving time in half.",
      color: "blue",
    },
    {
      icon: Brain,
      title: "Logical Reasoning",
      description: "Develop razor-sharp analytical thinking with our systematic approach to puzzles, sequences, and logical problems.",
      color: "indigo",
    },
    {
      icon: Database,
      title: "English Language Proficiency",
      description: "Transform your English comprehension and expression skills with techniques that work across all government exam formats.",
      color: "purple",
    },
    {
      icon: Users,
      title: "General Awareness and Current Affairs",
      description: "Stay ahead with our daily updates and memory techniques that make retaining crucial facts effortless.",
      color: "teal",
    },
    {
      icon: Monitor,
      title: "Computer Knowledge",
      description: "Grasp essential computer concepts and terminology through simplified explanations designed specifically for government exams.",
      color: "red",
    },
    {
      icon: Clock,
      title: "Time Management Techniques",
      description: "Learn our exclusive \"90-second decision\" method to maximize your score by spending the right amount of time on each question.",
      color: "yellow",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these essential skills and knowledge areas for government exam success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learnings.map((learning, index) => {
            const IconComponent = learning.icon;
            return (
              <div 
                key={index}
                className="feature-card bg-white p-6 rounded-xl border border-gray-100 shadow-md flex"
              >
                <div className={`bg-course-${learning.color}/10 p-4 rounded-full mr-4 flex-shrink-0`}>
                  <IconComponent className={`h-8 w-8 text-course-${learning.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{learning.title}</h3>
                  <p className="text-gray-600">{learning.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;
