import {
  GoabxWorkSideMenu,
  GoabxWorkSideMenuItem,
} from "@abgov/react-components/experimental";
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 624;

export const WorkSideMenuPlayground = () => {
  // On mobile (< MOBILE_BREAKPOINT), start with menu closed; on desktop, start with menu open
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= MOBILE_BREAKPOINT);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  // Single resize handler - manages both isMobile state and menu visibility
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < MOBILE_BREAKPOINT;

      setIsMobile(mobile);

      if (mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <GoabxWorkSideMenu
        heading="React 18 Test App"
        url="/"
        userName="Test User"
        userSecondaryText="test.user@example.com"
        open={menuOpen}
        onToggle={() => {
          console.log('[App] onToggle called, toggling menuOpen from', menuOpen, 'to', !menuOpen);
          setMenuOpen(prev => !prev);
        }}
        primaryContent={
          <>
            <GoabxWorkSideMenuItem
              icon="search"
              label="Search"
              url="/search"
            />

            <GoabxWorkSideMenuItem
              icon="list"
              label="Clients"
              url="/clients"
            />

            <GoabxWorkSideMenuItem
              icon="document"
              label="Documents"
              type="success"
              badge="New"
              url="/documents"
            >
              <GoabxWorkSideMenuItem
                label="Sub menu item 1"
                url="/documents/sub1"
              />
              <GoabxWorkSideMenuItem
                label="Sub menu item 2"
                url="/documents/sub2"
              />
              <GoabxWorkSideMenuItem
                label="Sub menu item 3"
                url="/documents/sub3"
              />
            </GoabxWorkSideMenuItem>
          </>
        }
        secondaryContent={
          <>
            <GoabxWorkSideMenuItem
              icon="notifications"
              label="Notifications"
              type="success"
              badge="1"
              url="/notifications"
            />
          </>
        }
        accountContent={
          <>
            <GoabxWorkSideMenuItem
              icon="settings"
              label="Settings"
              url="/settings"
            />
            <GoabxWorkSideMenuItem
              icon="log-out"
              label="Log out"
              url="/logout"
            />
          </>
        }
      />

      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h1>React 18 WorkSideMenu Test</h1>
        <p>isMobile: {isMobile ? 'true' : 'false'}</p>
        <p>menuOpen: {menuOpen ? 'true' : 'false'}</p>
        <p style={{ marginTop: '20px', color: '#666' }}>
          <strong>Bug Test:</strong> Click "Collapse menu" button. In React 18, the menu may not collapse
          because React sets <code>open="false"</code> as a string attribute instead of removing it.
        </p>
      </div>
    </div>
  );
};
