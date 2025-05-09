
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseDescription from "@/components/CourseDescription";
import CourseBenefits from "@/components/CourseBenefits";
import CourseLearning from "@/components/CourseLearning";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EnrollCTA from "@/components/EnrollCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      <section id="about">
        <CourseDescription />
      </section>
      
      <section id="features">
        <CourseBenefits />
      </section>
      
      <section id="curriculum">
        <CourseLearning />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="faqs">
        <FAQ />
      </section>
      
      <section id="enroll">
        <EnrollCTA />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
