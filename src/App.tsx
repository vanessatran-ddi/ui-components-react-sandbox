import { useState } from 'react';
import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout,
  GoabAccordion,
  GoabModal,
  GoabButton,
  GoabCallout,
  GoabBadge,
} from '@abgov/react-components';

export function App() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

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
          heading="Dispute details"
          maxContentWidth="100%"
        />
      </section>

      <GoabPageBlock width="100%">
        <h2>In progress tasks</h2>

        {/* Safari issue: Modal overlay constrained inside accordion */}
        <GoabAccordion
          heading="Payment request"
          headingContent={
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <GoabBadge type="information" content="Adjudication fee" />
              <GoabBadge type="midtone" content="In progress" />
            </div>
          }
          open={true}
        >
          <GoabCallout type="important" heading="Adjudication fee: $1.00">
            To continue processing your application, please complete the adjudication fee payment.
            <br /><br />
            Learn more about payment options on <a href="https://alberta.ca">alberta.ca</a>.
          </GoabCallout>
          <br />
          <GoabButton onClick={() => setIsPaymentModalOpen(true)} trailingIcon="open">
            Make payment
          </GoabButton>

          {/* Modal inside accordion - this causes overlay issue in Safari */}
          <GoabModal
            heading="Continue to payment"
            open={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
            actions={
              <>
                <GoabButton type="secondary" onClick={() => setIsPaymentModalOpen(false)}>
                  Cancel
                </GoabButton>
                <GoabButton type="primary" onClick={() => setIsPaymentModalOpen(false)}>
                  Go
                </GoabButton>
              </>
            }
          >
            <p>
              You will now be taken to our secure payment partner to complete your payment,
              or cancel if you're not ready yet.
            </p>
          </GoabModal>
        </GoabAccordion>

        <GoabAccordion
          heading="Adjudication"
          headingContent={<GoabBadge type="midtone" content="In progress" />}
        >
          <p><em>Scheduled sessions will appear here once available.</em></p>
        </GoabAccordion>

        <h2 style={{ marginTop: '32px' }}>Completed tasks</h2>

        <GoabAccordion
          heading="Complete your application"
          headingContent={<GoabBadge type="success" content="Completed" />}
        >
          <p>Your application has been submitted.</p>
        </GoabAccordion>

        <GoabAccordion
          heading="Manage your representatives"
          headingContent={<GoabBadge type="success" content="Completed" />}
        >
          <p>Representatives have been assigned.</p>
        </GoabAccordion>

        <GoabAccordion
          heading="Payment request"
          headingContent={
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <GoabBadge type="information" content="Application fee" />
              <GoabBadge type="success" content="Completed" />
            </div>
          }
        >
          <p>Payment received. Thank you.</p>
        </GoabAccordion>

        <GoabAccordion
          heading="Guided resolution: Discussion room"
          headingContent={<GoabBadge type="success" content="Completed" />}
        >
          <p>Discussion completed.</p>
        </GoabAccordion>

        <GoabAccordion
          heading="Mediation: Share your availability"
          headingContent={<GoabBadge type="success" content="Submitted" />}
        >
          <p>Availability submitted.</p>
        </GoabAccordion>
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
