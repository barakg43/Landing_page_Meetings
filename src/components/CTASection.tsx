import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onRegisterClick: () => void;
}

export const CTASection = ({ onRegisterClick }: CTASectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          מוכנים להצטרף?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          המקומות מוגבלים! הרשמו עכשיו כדי להבטיח את מקומכם במפגש המיוחד הזה
        </p>
        <Button 
          onClick={onRegisterClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-[var(--shadow-soft)] transition-all hover:scale-105"
        >
          להרשמה למפגש
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          יש שאלות? צרו קשר בטלפון: 054-3168039
        </p>
      </div>
    </section>
  );
};
