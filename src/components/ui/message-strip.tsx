"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

const messageStripVariants = cva(
  "relative w-full rounded-sm border px-4 py-3 text-sm flex items-start gap-3 [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:translate-y-0.5",
  {
    variants: {
      design: {
        Information: "bg-information-background text-information border-information/20 [&>svg]:text-information",
        Positive: "bg-success-background text-success border-success/20 [&>svg]:text-success",
        Critical: "bg-warning-background text-warning border-warning/20 [&>svg]:text-warning",
        Negative: "bg-error-background text-destructive border-destructive/20 [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      design: "Information",
    },
  },
);

const iconMap = {
  Information: Info,
  Positive: CheckCircle,
  Critical: AlertTriangle,
  Negative: AlertCircle,
};

interface MessageStripProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof messageStripVariants> {
  /**
   * Defines the component type/design
   */
  design?: "Information" | "Positive" | "Critical" | "Negative";
  /**
   * Defines whether the MessageStrip will show an icon in the beginning
   */
  hideIcon?: boolean;
  /**
   * Defines whether the MessageStrip renders close button
   */
  hideCloseButton?: boolean;
  /**
   * Custom icon to override the default type icon
   */
  icon?: React.ReactNode;
  /**
   * Callback fired when the close button is pressed
   */
  onClose?: () => void;
  /**
   * The message text content
   */
  children: React.ReactNode;
}

function MessageStrip({
  className,
  design = "Information",
  hideIcon = false,
  hideCloseButton = false,
  icon,
  onClose,
  children,
  ...props
}: MessageStripProps) {
  const IconComponent = iconMap[design];

  return (
    <div
      data-slot="message-strip"
      role="alert"
      className={cn(messageStripVariants({ design }), className)}
      {...props}
    >
      {!hideIcon && (
        <div className="flex-shrink-0">
          {icon || <IconComponent className="size-4" />}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <div className="text-sm leading-relaxed break-words">
          {children}
        </div>
      </div>

      {!hideCloseButton && (
        <button
          type="button"
          onClick={onClose}
          className="flex-shrink-0 ml-2 p-1 rounded-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          aria-label="Close message"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}

export { MessageStrip, messageStripVariants };
export type { MessageStripProps };

