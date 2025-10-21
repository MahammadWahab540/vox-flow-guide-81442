import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

const Stepper = ({ steps, currentStep, completedSteps, onStepClick }: StepperProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isCurrent = currentStep === index;
          const isClickable = index <= Math.max(...completedSteps, -1) + 1;

          return (
            <div key={step.id} className="flex-1 flex flex-col items-center relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute top-5 left-1/2 w-full h-0.5 -z-10 transition-colors duration-300",
                    isCompleted ? "bg-success" : "bg-border"
                  )}
                />
              )}

              {/* Step Circle */}
              <button
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 border-2",
                  isCompleted
                    ? "bg-success border-success text-success-foreground"
                    : isCurrent
                    ? "bg-primary border-primary text-primary-foreground scale-110"
                    : "bg-card border-border text-muted-foreground",
                  isClickable && "cursor-pointer hover:scale-105"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </button>

              {/* Step Title */}
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium text-center transition-colors duration-300",
                  isCurrent ? "text-primary" : isCompleted ? "text-success" : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
