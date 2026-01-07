import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export const useCalendly = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkCalendly = () => {
      if (window.Calendly) {
        setIsLoaded(true);
        setIsLoading(false);
        setHasError(false);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkCalendly()) return;

    // Poll for Calendly script
    const interval = setInterval(() => {
      if (checkCalendly()) {
        clearInterval(interval);
      }
    }, 100);

    // Timeout after 10 seconds
    const timeout = setTimeout(() => {
      if (!window.Calendly) {
        setHasError(true);
        setIsLoading(false);
        clearInterval(interval);
        toast({
          title: "Booking system unavailable",
          description: "Please use the direct link to schedule your consultation.",
          variant: "destructive",
        });
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      // Cleanup: close popup on unmount
      if (window.Calendly?.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }
    };
  }, []);

  const openCalendly = (url: string) => {
    if (!isLoaded) {
      if (isLoading) {
        toast({
          title: "Loading booking system...",
          description: "Please wait a moment.",
        });
      } else if (hasError) {
        // Open fallback link
        window.open(url, "_blank", "noopener,noreferrer");
        toast({
          title: "Opening in new tab",
          description: "The booking page will open in a new window.",
        });
      }
      return;
    }

    try {
      // Close any existing popup first
      window.Calendly.closePopupWidget?.();
      
      // Small delay to ensure cleanup before opening
      setTimeout(() => {
        window.Calendly.showPopupWidget(url);
      }, 50);
    } catch (error) {
      console.error("Calendly error:", error);
      window.open(url, "_blank", "noopener,noreferrer");
      toast({
        title: "Opening in new tab",
        description: "The booking page will open in a new window.",
      });
    }
  };

  return { isLoaded, isLoading, hasError, openCalendly };
};

declare global {
  interface Window {
    Calendly: any;
  }
}
