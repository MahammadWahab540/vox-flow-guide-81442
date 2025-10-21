import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import EmiModal from "./EmiModal";

interface StepContentProps {
  step: any;
  onNext: () => void;
  onNavigateToConfirmation: () => void;
  isLastStep: boolean;
}

const StepContent = ({ step, onNext, onNavigateToConfirmation, isLastStep }: StepContentProps) => {
  const [showModal, setShowModal] = useState(step.id === 3);

  const renderStepContent = () => {
    switch (step.id) {
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground">{step.content}</p>
            <Button onClick={onNext} size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-6">{step.content}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {step.paymentOptions?.map((option: any) => (
                <Button
                  key={option.id}
                  variant={option.id === 3 ? "default" : "outline"}
                  size="lg"
                  className="h-auto py-6 flex flex-col gap-2"
                  onClick={option.id === 3 ? onNext : onNavigateToConfirmation}
                >
                  <span className="font-semibold text-lg">{option.title}</span>
                  {option.description && (
                    <span className="text-xs opacity-80">{option.description}</span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <>
            <div className="space-y-4">
              <p className="text-muted-foreground">{step.content}</p>
              <Button onClick={onNext} size="lg" className="w-full sm:w-auto">
                Continue
              </Button>
            </div>
            {showModal && (
              <EmiModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                imageUrl={step.modalImage}
              />
            )}
          </>
        );

      case 4:
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">{step.content}</p>
            <div className="space-y-3">
              {step.documents?.map((doc: any) => (
                <div key={doc.id} className="flex items-center space-x-3">
                  <Checkbox id={`doc-${doc.id}`} />
                  <label
                    htmlFor={`doc-${doc.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {doc.name}
                  </label>
                </div>
              ))}
            </div>
            {isLastStep && (
              <Button onClick={onNavigateToConfirmation} size="lg" className="w-full sm:w-auto">
                Submit Application
              </Button>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>{renderStepContent()}</CardContent>
    </Card>
  );
};

export default StepContent;
