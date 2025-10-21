import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "@/components/Stepper";
import StepContent from "@/components/StepContent";
import ChatTranscript from "@/components/ChatTranscript";
import FloatingHelp from "@/components/FloatingHelp";
import { stepData } from "@/data/stepData";
import { chatMessages } from "@/data/chatData";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      navigate("/");
    }
  }, [navigate]);

  const handleStepClick = (step: number) => {
    if (step <= Math.max(...completedSteps, -1) + 1) {
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    if (currentStep < stepData.length - 1) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handleNavigateToConfirmation = () => {
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Onboarding Portal</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {localStorage.getItem("userName")}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Stepper
            steps={stepData}
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={handleStepClick}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Step Content */}
          <div className="lg:col-span-2">
            <StepContent
              step={stepData[currentStep]}
              onNext={handleNext}
              onNavigateToConfirmation={handleNavigateToConfirmation}
              isLastStep={currentStep === stepData.length - 1}
            />
          </div>

          {/* Chat Transcript */}
          <div className="lg:col-span-1">
            <ChatTranscript messages={chatMessages} />
          </div>
        </div>
      </div>

      <FloatingHelp onNavigateToConfirmation={handleNavigateToConfirmation} />
    </div>
  );
};

export default Dashboard;
