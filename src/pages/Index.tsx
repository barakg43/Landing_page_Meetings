import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { DetailsSection } from "@/components/DetailsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  // Replace this URL with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://forms.google.com/your-form-url";

  const handleRegisterClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Hero onRegisterClick={handleRegisterClick} />
      <AboutSection />
      <DetailsSection />
      <CTASection onRegisterClick={handleRegisterClick} />
      
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 מפגש היכרויות. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
