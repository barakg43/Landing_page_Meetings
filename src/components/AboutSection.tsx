import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Coffee } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "אווירה חמה ומכבדת",
      description: "מפגש באווירה נעימה ורגועה שמאפשרת היכרות אמיתית"
    },
    {
      icon: Users,
      title: "קהל ממוקד",
      description: "פרק ב׳ ללא ילדים - כולם באותו מצב ומבינים אחד את השני"
    },
    {
      icon: Coffee,
      title: "פעילות מגוונת",
      description: "שילוב של פעילויות שובר קרח ושיחות אישיות"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          אודות המפגש
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          מפגש היכרויות מיוחד המיועד לדתיים רווקים ורווקות בני 30-45, פרק ב׳ ללא ילדים
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
