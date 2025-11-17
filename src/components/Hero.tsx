import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meetup.jpg";

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero = ({ onRegisterClick }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
         מפגש היכרויות -אגדות וקלפים: חיבורים וקשרים
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          לדתיים רווקים ורווקות | פרק ב׳ ללא ילדים
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          ערב חווייתי לרווקים ורווקות דתיים 30–43 ופרק ב' ללא ילדים

יש רגעים בחיים שהלב כבר מוכן –
אבל הדרך לזוגיות מרגישה מבולגנת, מתישה ומסורבלת.

אנחנו יוצאים לדייטים, מדברים, מנסים,
ומרגישים שמיצינו את הדרך המוכרת.
בתוך הלב מתחילה להופיע בקשה שקטה:
לפגוש אנשים בדרך אחרת. עמוקה יותר. אמיתית יותר.

הסדנה הזו נולדה בדיוק מהמקום הזה.

ערב חד־פעמי,
שמאפשר סוף סוף לעצור, לנשום, להתחבר,
ולפגוש גם את עצמכם — וגם אחרים —
באופן שלא קורה בשום מפגש רגיל.
        </p>
        <Button 
          onClick={onRegisterClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-[var(--shadow-soft)] transition-all hover:scale-105"
        >
          להרשמה למפגש
        </Button>
      </div>
    </section>
  );
};
