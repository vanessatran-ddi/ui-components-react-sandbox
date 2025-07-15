import React from 'react';
import { GoabTemporaryNotificationCtrl, GoabButton } from '@abgov/react-components';
import { TemporaryNotification } from "@abgov/ui-components-common";

// This component tests the multi-step process code snippet from our documentation
export function TemporaryNotificationMultiProcessExample() {
  
  const showMultiStepProcess = () => {
    let isCancelled = false;
    
    // Step 1: Show submitting process
    const submittingId = TemporaryNotification.show("Submitting application review", {
      type: "basic",
      actionText: "Cancel",
      action: () => {
        isCancelled = true;
        TemporaryNotification.dismiss(submittingId);
        console.log("Application review submission cancelled");
      }
    });

    // Step 2: Show success after 2.5 seconds
    setTimeout(() => {
      if (!isCancelled) {
        TemporaryNotification.show("Review submitted", {
          type: "success",
          duration: "short"
        });
      }
    }, 2500);

    // Step 3: Show status update with action after 6 seconds
    setTimeout(() => {
      if (!isCancelled) {
        TemporaryNotification.show("Status of application 123-D changed to complete.", {
          type: "basic",
          actionText: "View",
          action: () => {
            console.log("View action clicked!");
          }
        });
      }
    }, 6000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Temporary Notification Multi-Step Process Example</h1>
      <p>Testing the multi-step process code snippet from the documentation</p>
      
      <GoabButton onClick={showMultiStepProcess}>Submit review</GoabButton>
      
      {/* The controller component */}
      <GoabTemporaryNotificationCtrl 
        verticalPosition="bottom" 
        horizontalPosition="center" 
      />
    </div>
  );
}