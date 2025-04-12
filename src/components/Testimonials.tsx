
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "SSC CGL Selected Candidate",
      image: "/testimonial1.jpg",
      quote: "This course was instrumental in my success at the SSC CGL exam. The structured approach and comprehensive coverage of all topics gave me a significant edge over other candidates.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      position: "IBPS PO Selected Candidate",
      image: "/testimonial2.jpg",
      quote: "I had attempted the banking exam twice before without success. The techniques and shortcuts taught in this course helped me crack the IBPS PO exam on my third attempt with a great score!",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      position: "RRB NTPC Selected Candidate",
      image: "/testimonial3.jpg",
      quote: "The 90-second decision method taught in this course completely transformed my approach to solving problems under time pressure. Highly recommended for serious aspirants!",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who successfully secured government positions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
