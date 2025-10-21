import { useState } from "react";
import { AILoader } from "@/components/ui/ai-loader";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";

type VoiceState = "thinking" | "speaking" | "listening" | "error";

const VoiceComponent = () => {
  const [state, setState] = useState<VoiceState>("listening");
  const [isActive, setIsActive] = useState(false);

  const toggleVoice = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setState("listening");
    } else {
      setState("thinking");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="relative">
        <AILoader state={state} className="scale-150" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button
          size="lg"
          variant={isActive ? "destructive" : "default"}
          onClick={toggleVoice}
          className="gap-2"
        >
          {isActive ? (
            <>
              <MicOff className="w-5 h-5" />
              Stop
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              Start Voice
            </>
          )}
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setState("listening")}
          >
            Listening
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setState("thinking")}
          >
            Thinking
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setState("speaking")}
          >
            Speaking
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setState("error")}
          >
            Error
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VoiceComponent;
