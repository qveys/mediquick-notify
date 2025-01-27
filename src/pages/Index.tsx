import React from "react";
import MedicationCard from "@/components/MedicationCard";
import BottomNav from "@/components/BottomNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

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

  return (
    <div className="min-h-screen pb-24 bg-background">
      <ThemeToggle />
      <header className="p-6 glass mb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-2">Programme du jour</h1>
          <p className="text-muted-foreground">
            Vous avez {medications.length} médicaments programmés
          </p>
        </div>
      </header>

      <main className="px-6 space-y-4 max-w-md mx-auto">
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

      <BottomNav />
    </div>
  );
};

export default Index;