import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Clock, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedicationCardProps {
  name: string;
  time: string;
  dosage: string;
  onTake: () => void;
  onSkip: () => void;
}

const MedicationCard = ({
  name,
  time,
  dosage,
  onTake,
  onSkip,
}: MedicationCardProps) => {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="relative">
        <div className="absolute -top-4 left-6 z-10">
          <div className="flex items-center text-xl font-semibold bg-background px-2 py-1 rounded">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            {time}
          </div>
        </div>
        <Card className="w-full overflow-hidden animate-fade-in glass">
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-primary/10">
                <Pill className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">
                  {dosage}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button
                onClick={onTake}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Check className="w-4 h-4 mr-2" />
                Take
              </Button>
              <Button
                onClick={onSkip}
                variant="outline"
                className="flex-1"
              >
                <X className="w-4 h-4 mr-2" />
                Skip
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MedicationCard;