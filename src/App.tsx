import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout, GoabPopover, GoabButton, GoabLink, GoabIconButton,
} from '@abgov/react-components';
import {FilterChipExamples} from "./filter-chip/FilterChipExamples";

export function App() {
  const popoverTargetWithClose = (
      <GoabButton type="primary" size="normal">
        Click to open
      </GoabButton>
  );
  return (
    <GoabOneColumnLayout>
      <section slot="header">
        <GoabMicrositeHeader
          type="beta"
          version="React 1.0"
          feedbackUrl="https://github.com/GovAlta/ui-components/issues/new/choose"
        />
        <GoabAppHeader
          url="/"
          heading="Design system templates"
          maxContentWidth="100%"
        />
      </section>

      <GoabPageBlock width="100%">
        <GoabPopover target={popoverTargetWithClose} minWidth="250px">
          <p>This popover has a close icon button inside</p>
          <p>Click the icon button below to close this popover.</p>
          <GoabIconButton
              icon="close"
              variant="color"
              action="close"
              ariaLabel="Close Popover"
          />
        </GoabPopover>
      </GoabPageBlock>

      <section slot="footer">
        <GoabAppFooter maxContentWidth="100%">
          <GoabAppFooterMetaSection>
            <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9">
              Get help
            </a>
            <a href="https://goa-dio.atlassian.net/wiki/spaces/DS/pages/2342813697/Design+System+Drop-in+hours">
              Drop-in Hours
            </a>
            <a href="https://github.com/GovAlta/ui-components/issues/new/choose">
              Contribute
            </a>
          </GoabAppFooterMetaSection>
        </GoabAppFooter>
      </section>
    </GoabOneColumnLayout>
  );
}

export default App;
