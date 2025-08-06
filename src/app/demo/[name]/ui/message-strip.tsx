"use client";

import { MessageStrip } from "@/components/ui/message-strip";

export const messageStrip = {
  name: "message-strip",
  components: {
    default: (
      <div className="space-y-4 max-w-2xl">
        <MessageStrip design="Information">
          This is an information message. It provides helpful context about the current state.
        </MessageStrip>
        
        <MessageStrip design="Positive">
          Success! Your changes have been saved successfully.
        </MessageStrip>
        
        <MessageStrip design="Critical">
          Warning: Please review the following items before proceeding.
        </MessageStrip>
        
        <MessageStrip design="Negative">
          Error: Unable to process your request. Please try again.
        </MessageStrip>
        
        <MessageStrip design="Information" hideIcon>
          This message strip has no icon but includes additional text to indicate the message type.
        </MessageStrip>
        
        <MessageStrip design="Critical" hideCloseButton>
          This warning message cannot be dismissed by the user.
        </MessageStrip>
        
        <MessageStrip 
          design="Information" 
          onClose={() => alert("Message closed")}
        >
          This message can be closed by clicking the X button. The text will wrap to multiple lines if it exceeds the available width, maintaining proper spacing and alignment.
        </MessageStrip>
      </div>
    ),
  },
};