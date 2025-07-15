import React from 'react';
import { GoabTemporaryNotificationCtrl, GoabButton } from '@abgov/react-components';
import { TemporaryNotification } from "@abgov/ui-components-common";

// This component tests the indeterminate to progress notification code snippet from our documentation
export function TemporaryNotificationIndeterminateExample() {
  
  const showIndeterminateSearch = () => {
    let isCancelled = false;
    
    // Show indeterminate progress for search
    const uuid = TemporaryNotification.show("Searching case management system...", {
      type: "indeterminate",
      duration: 0, // Don't auto-dismiss
      actionText: "Cancel",
      action: () => {
        isCancelled = true;
        TemporaryNotification.dismiss(uuid);
        console.log("Search cancelled");
      }
    });

    // Simulate search completion after random time (3-6 seconds)
    const searchTime = Math.random() * 3000 + 3000; // 3-6 seconds
    setTimeout(() => {
      if (!isCancelled) {
        TemporaryNotification.show("Search complete - 47 records found", {
          type: "success",
          duration: "medium",
          actionText: "View",
          action: () => {
            console.log("View search results clicked!");
          },
          cancelUUID: uuid
        });
      }
    }, searchTime);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Temporary Notification Indeterminate Example</h1>
      <p>Testing the indeterminate to progress notification code snippet from the documentation</p>
      
      <GoabButton type="secondary" leadingIcon="search" onClick={showIndeterminateSearch}>
        Search case history
      </GoabButton>
      
      {/* The controller component */}
      <GoabTemporaryNotificationCtrl 
        verticalPosition="bottom" 
        horizontalPosition="center" 
      />
    </div>
  );
}