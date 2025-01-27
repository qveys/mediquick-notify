import React from "react";
import { Home, PlusCircle, Pill, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const [active, setActive] = React.useState("home");

  const items = [
    { id: "home", icon: Home, label: "Home" },
    { id: "add", icon: PlusCircle, label: "Add" },
    { id: "medications", icon: Pill, label: "Meds" },
    { id: "menu", icon: Menu, label: "More" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in">
      <div className="glass mx-4 mb-4 rounded-2xl">
        <div className="flex justify-around p-4 sticky bottom-0">
          {items.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={cn(
                "flex flex-col items-center space-y-1 transition-colors",
                active === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;