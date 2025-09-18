"use client";

import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useMemo } from "react";

export type MessageBoxType =
  | "Confirm"
  | "Information"
  | "Success"
  | "Warning"
  | "Error";
export type MessageBoxAction =
  | "OK"
  | "Cancel"
  | "Yes"
  | "No"
  | "Abort"
  | "Retry"
  | "Ignore";

export interface MessageBoxProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  type?: MessageBoxType;
  title?: string;
  children?: React.ReactNode;
  actions?: MessageBoxAction[];
  emphasizedAction?: MessageBoxAction;
  onAction?: (action: MessageBoxAction) => void;
  className?: string;
  titleText?: string; // UI5 compatibility
  state?: "None" | "Success" | "Warning" | "Error" | "Information"; // UI5 compatibility
}

const messageBoxIcons = {
  Confirm: Info,
  Information: Info,
  Success: CheckCircle,
  Warning: AlertCircle,
  Error: XCircle,
};

const messageBoxColors = {
  Confirm: "border-[#d9d9d9]",
  Information: "border-blue-500",
  Success: "border-green-500",
  Warning: "border-orange-500",
  Error: "border-red-500",
};

const defaultActions: Record<MessageBoxType, MessageBoxAction[]> = {
  Confirm: ["OK", "Cancel"],
  Information: ["OK"],
  Success: ["OK"],
  Warning: ["OK"],
  Error: ["OK"],
};

const ICON_MAP = {
  Confirm: (
    <svg
      viewBox="0 0 512 512"
      width="16"
      height="16"
      role="presentation"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      className="fill-[#788fa6]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g role="presentation">
        <path d="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm32 289q31-10 50.5-36.5T358 192q0-43-29.5-72.5T256 90q-21 0-39.5 8T184 118.5 162 148t-8 35q0 20 9 30.5t23 10.5q13 0 22.5-9t9.5-23q0-16 11-27t27-11 27 11 11 27-11 27-27 11q-14 0-23 9.5t-9 22.5v26q0 14 9 23t23 9q13 0 22-9t10-22zm-32 127q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z"></path>
      </g>
    </svg>
  ),
  Information: (
    <svg
      viewBox="0 0 512 512"
      width="16"
      height="16"
      className="fill-[#0070f2]"
      role="presentation"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g role="presentation">
        <path d="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm32 289q31-10 50.5-36.5T358 192q0-43-29.5-72.5T256 90q-21 0-39.5 8T184 118.5 162 148t-8 35q0 20 9 30.5t23 10.5q13 0 22.5-9t9.5-23q0-16 11-27t27-11 27 11 11 27-11 27-27 11q-14 0-23 9.5t-9 22.5v26q0 14 9 23t23 9q13 0 22-9t10-22zm-32 127q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z"></path>
      </g>
    </svg>
  ),
  Success: (
    <svg
      viewBox="0 0 512 512"
      width="16"
      height="16"
      role="presentation"
      className="fill-[#30914c]"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g role="presentation">
        <path d="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm150 183q10-9 10-23 0-13-9.5-22.5T384 128t-22 9L186 308l-68-63q-9-9-22-9t-22.5 9.5T64 268q0 15 10 24l91 83q9 9 21 9 13 0 23-9z"></path>
      </g>
    </svg>
  ),
  Warning: (
    <svg
      viewBox="0 0 512 512"
      width="16"
      height="16"
      role="presentation"
      className="fill-[#e76500]"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g role="presentation">
        <path d="M505 399q7 13 7 27 0 21-15.5 37.5T456 480H56q-25 0-40.5-16.5T0 426q0-14 7-27L208 59q17-27 48-27 14 0 27 6.5T304 59zM288 176q0-14-9-23t-23-9-23 9-9 23v96q0 14 9 23t23 9 23-9 9-23v-96zm-32 240q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z"></path>
      </g>
    </svg>
  ),
  Error: (
    <svg
      viewBox="0 0 512 512"
      width="16"
      height="16"
      role="presentation"
      className="fill-[#f53232]"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g role="presentation">
        <path d="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z"></path>
      </g>
    </svg>
  ),
};

export const MessageBox = forwardRef<HTMLDivElement, MessageBoxProps>(
  (
    {
      open,
      onOpenChange,
      type = "Confirm",
      title,
      titleText,
      children,
      actions,
      emphasizedAction,
      onAction,
      className,
      state,
      ...props
    },
    ref
  ) => {
    const resolvedType = useMemo(() => {
      if (state) {
        switch (state) {
          case "Success":
            return "Success";
          case "Warning":
            return "Warning";
          case "Error":
            return "Error";
          case "Information":
            return "Information";
          default:
            return type;
        }
      }
      return type;
    }, [state, type]);

    const resolvedTitle = title || titleText;
    const resolvedActions = actions || defaultActions[resolvedType];
    const borderColor = messageBoxColors[resolvedType];

    const handleAction = (action: MessageBoxAction) => {
      onAction?.(action);
      onOpenChange?.(false);
    };

    // Handle Escape key
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && open) {
          const cancelAction = resolvedActions.find((action) =>
            ["Cancel", "No", "Abort"].includes(action)
          );
          if (cancelAction) handleAction(cancelAction);
          else onOpenChange?.(false);
        }
      };

      if (open) {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }
    }, [open, resolvedActions, onOpenChange, onAction]);

    const renderActions = () => {
      return resolvedActions.map((action) => {
        const isEmphasized =
          emphasizedAction === action ||
          (emphasizedAction === undefined && ["OK", "Yes"].includes(action));

        if (["Cancel", "No", "Abort"].includes(action)) {
          return (
            <AlertDialogCancel
              key={action}
              onClick={() => handleAction(action)}
              className="text-primary shadow-none border border-transparent font-bold hover:border-gray-300"
            >
              {action === "Cancel" ? "Abbrechen" : action}
            </AlertDialogCancel>
          );
        }

        return (
          <AlertDialogAction
            key={action}
            onClick={() => handleAction(action)}
            className={cn(
              isEmphasized
                ? "font-bold px-5 py-2"
                : "bg-transparent text-primary font-bold border h-auto hover:bg-transparent border-transparent  hover:border-gray-300"
            )}
          >
            {action}
          </AlertDialogAction>
        );
      });
    };

    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent
          ref={ref}
          className={cn(
            "max-w-10/12 min-w-xs border border-gray-300 shadow-lg p-0 gap-0 rounded-[12px]",
            className
          )}
          {...props}
        >
          <AlertDialogHeader
            className={cn("px-4 py-[10px] space-y-0 border-b", borderColor)}
            style={{
              boxShadow:
                "0 .125rem .125rem 0 rgba(34,53,72,.05), inset 0 -.0625rem 0 0 #d9d9d9",
            }}
          >
            {resolvedTitle && (
              <AlertDialogTitle className="flex items-center gap-2 text-base font-bold ">
                {ICON_MAP[resolvedType]}
                {resolvedTitle}
              </AlertDialogTitle>
            )}
          </AlertDialogHeader>
          {children && (
            <AlertDialogDescription className="text-left text-sm px-5 py-3 text-[#131e29]">
              {children}
            </AlertDialogDescription>
          )}
          <AlertDialogFooter className="flex-row justify-end gap-2 py-1 px-4 bg-transparent space-x-0 space-y-0 border-t border-[#d9d9d9]">
            {renderActions()}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);

MessageBox.displayName = "MessageBox";

export { MessageBox as default };
