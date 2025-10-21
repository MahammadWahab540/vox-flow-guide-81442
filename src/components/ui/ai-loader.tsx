import { cn } from "@/lib/utils";

interface AILoaderProps {
  state?: "thinking" | "speaking" | "listening" | "error";
  className?: string;
}

export const AILoader = ({ state = "thinking", className }: AILoaderProps) => {
  const stateText = {
    thinking: "Thinking",
    speaking: "Speaking",
    listening: "Listening",
    error: "Error"
  };

  const text = stateText[state];
  const letters = text.split("");

  return (
    <div className={cn("loader-wrapper", className)}>
      {letters.map((letter, index) => (
        <span 
          key={index} 
          className="loader-letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
      <div className={cn("loader", `loader-${state}`)} />
    </div>
  );
};
