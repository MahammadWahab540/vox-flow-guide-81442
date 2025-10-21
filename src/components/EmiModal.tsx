import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EmiModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
}

const EmiModal = ({ isOpen, onClose, imageUrl }: EmiModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">0% EMI Loan Information</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="mt-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="EMI Information"
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="bg-secondary rounded-lg p-8 text-center">
              <p className="text-lg font-medium">
                Special 0% EMI offer available for your loan!
              </p>
              <p className="text-muted-foreground mt-2">
                No processing fees • No hidden charges • Flexible tenure
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmiModal;
