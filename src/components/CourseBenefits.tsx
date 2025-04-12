
import { CheckCircle2 } from "lucide-react";

const CourseBenefits = () => {
  const benefits = [
    {
      title: "All-in-One Preparation",
      description: "Master multiple government exams simultaneously with our comprehensive 500+ video lessons covering overlapping syllabi for SSC, Banking, and Railways",
    },
    {
      title: "Expert-Crafted Content",
      description: "Learn from specialized study materials designed by successful candidates who understand exactly what it takes to crack these competitive exams",
    },
    {
      title: "Strategic Approach",
      description: "Develop proven time management techniques and question selection strategies that maximize your score in time-constrained environments",
    },
    {
      title: "Complete Resource Package",
      description: "Access comprehensive eBooks for in-depth understanding and topic-specific practice tests that identify your strengths and weaknesses",
    },
    {
      title: "Current Affairs Mastery",
      description: "Stay updated with our daily current affairs coverage using the effective 'Why, What, and How' approach essential for competitive exams in 2025",
    },
    {
      title: "Personalized Learning",
      description: "Track your progress through detailed performance analytics that help you focus your efforts where they'll have the greatest impact",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Course Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What makes our government exam preparation course stand out from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="feature-card p-6 rounded-xl border border-gray-100 shadow-md bg-white"
            >
              <div className="flex items-start mb-4">
                <CheckCircle2 className="h-6 w-6 text-course-indigo mr-2 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 ml-8">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseBenefits;
