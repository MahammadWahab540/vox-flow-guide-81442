import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Our agent will be contacting you within 4-5 hours to assist you further.
          </p>
          
          <Button onClick={() => navigate("/dashboard")} size="lg">
            Return to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmation;
