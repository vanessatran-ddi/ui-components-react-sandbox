import React from 'react';
import { GoabTemporaryNotificationCtrl, GoabButton } from '@abgov/react-components';
import { TemporaryNotification } from "@abgov/ui-components-common";

// This component tests the progress notification code snippet from our documentation
export function TemporaryNotificationProgressExample() {
  
  const showProgressNotification = () => {
    let isCancelled = false;
    
    // Show progress notification with cancel option
    const uuid = TemporaryNotification.show("Downloading report D-23459", {
      type: "progress",
      duration: 0, // Don't auto-dismiss
      actionText: "Cancel",
      action: () => {
        isCancelled = true;
        TemporaryNotification.dismiss(uuid);
        console.log("Download cancelled");
      }
    });

    // Set initial progress
    TemporaryNotification.setProgress(uuid, 0);

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
      if (isCancelled) {
        clearInterval(interval);
        return;
      }
      
      progress += 5;
      TemporaryNotification.setProgress(uuid, progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          TemporaryNotification.show("Report downloaded", {
            type: "success",
            duration: "medium",
            actionText: "View",
            action: () => {
              console.log("View report clicked!");
            },
            cancelUUID: uuid
          });
        }, 300);
      }
    }, 200);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Temporary Notification Progress Example</h1>
      <p>Testing the progress notification code snippet from the documentation</p>
      
      <GoabButton onClick={showProgressNotification}>
        Download report
      </GoabButton>
      
      {/* The controller component */}
      <GoabTemporaryNotificationCtrl 
        verticalPosition="bottom" 
        horizontalPosition="center" 
      />
    </div>
  );
}