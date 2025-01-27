import React, { useState } from "react";
import MedicationCard from "@/components/MedicationCard";
import BottomNav from "@/components/BottomNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Index = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const medications = [
    {
      id: 1,
      name: "Tenofovir",
      time: "23:00",
      dosage: "Prendre 1 comprimé",
    },
    {
      id: 2,
      name: "Vitamine D",
      time: "08:00",
      dosage: "Prendre 1 comprimé avec de la nourriture",
    },
  ];

  const handleTake = (name: string) => {
    toast({
      title: "Médicament pris",
      description: `${name} a été marqué comme pris.`,
    });
  };

  const handleSkip = (name: string) => {
    toast({
      title: "Médicament ignoré",
      description: `${name} a été ignoré.`,
      variant: "destructive",
    });
  };

  // Generate 7 days starting from today
  const getDays = () => {
    const days = [];
    const today = new Date();
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    toast({
      title: "Date sélectionnée",
      description: `Vous avez sélectionné le ${format(date, 'dd MMMM yyyy', { locale: fr })}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass">
          <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-2">Programme du jour</h1>
            <p className="text-muted-foreground">
              Vous avez {medications.length} médicaments programmés
            </p>
          </div>
        </div>
      </header>

      <div className="fixed top-[116px] left-0 right-0 z-40">
        <div className="glass">
          <div className="flex justify-between px-4 py-3">
            {getDays().map((date, index) => (
              <div
                key={index}
                onClick={() => handleDateClick(date)}
                className={`flex flex-col items-center cursor-pointer transition-colors hover:text-primary ${
                  format(date, "d") === format(selectedDate, "d")
                    ? "text-primary"
                    : ""
                }`}
              >
                <span className="text-sm">
                  {format(date, "EEE", { locale: fr }).toLowerCase()}
                </span>
                <span className="text-xl font-bold">{format(date, "d")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-6 space-y-10 max-w-md mx-auto mt-[200px] mb-24">
        {medications.map((med) => (
          <MedicationCard
            key={med.id}
            name={med.name}
            time={med.time}
            dosage={med.dosage}
            onTake={() => handleTake(med.name)}
            onSkip={() => handleSkip(med.name)}
          />
        ))}
      </main>

      <ThemeToggle />
      <BottomNav />
    </div>
  );
};

export default Index;