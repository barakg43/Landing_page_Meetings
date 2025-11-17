import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, CheckCircle } from "lucide-react";

export const DetailsSection = () => {
  const details = [
    {
      icon: Calendar,
      label: "תאריך",
      value: "יום חמישי, 15 בינואר 2025"
    },
    {
      icon: Clock,
      label: "שעה",
      value: "19:30-22:00"
    },
    {
      icon: MapPin,
      label: "מקום",
      value: "מרכז אירועים - ירושלים"
    }
  ];

  const included = [
    "כיבוד קל ומשקאות",
    "פעילויות שובר קרח מודרכות",
    "זמן להיכרות אישית",
    "אווירה נעימה ומכבדת"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          פרטי המפגש
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {details.map((detail, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-accent/10 mb-3">
                  <detail.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                <p className="font-semibold text-card-foreground">{detail.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto border-border bg-card">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-card-foreground">מה כלול במפגש?</h3>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
