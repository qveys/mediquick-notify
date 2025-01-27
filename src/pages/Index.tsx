import React from "react";
import MedicationCard from "@/components/MedicationCard";
import BottomNav from "@/components/BottomNav";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const medications = [
    {
      id: 1,
      name: "Tenofovir",
      time: "23:00",
      dosage: "Take 1 pill",
    },
    {
      id: 2,
      name: "Vitamin D",
      time: "08:00",
      dosage: "Take 1 pill with food",
    },
  ];

  const handleTake = (name: string) => {
    toast({
      title: "Medication taken",
      description: `${name} has been marked as taken.`,
    });
  };

  const handleSkip = (name: string) => {
    toast({
      title: "Medication skipped",
      description: `${name} has been skipped.`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen pb-24">
      <header className="p-6 glass mb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-2">Today's Schedule</h1>
          <p className="text-muted-foreground">
            You have {medications.length} medications scheduled
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