import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingHelpProps {
  onNavigateToConfirmation: () => void;
}

const FloatingHelp = ({ onNavigateToConfirmation }: FloatingHelpProps) => {
  return (
    <Button
      onClick={onNavigateToConfirmation}
      size="lg"
      className="fixed bottom-6 right-6 rounded-full shadow-lg h-14 px-6 gap-2"
    >
      <HelpCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Need Human Assistance?</span>
      <span className="sm:hidden">Help</span>
    </Button>
  );
};

export default FloatingHelp;
