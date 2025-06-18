import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout, GoabButtonGroup, GoabButton, GoabModal,
} from '@abgov/react-components';
import {useState} from "react";

export function App() {
  const [open, setOpen] = useState(false);

  function onClick() {
    setOpen(true);
  }

  function onClose() {
    console.log("closed");
    setOpen(false);
  }
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
        <GoabButton onClick={onClick}>Show Modal</GoabButton>
        <GoabModal heading="Industry Description" open={open}>
          <h4>Business, building, and other support services</h4>
          <p>This industry is made up of two major sub industries:</p>
          <ol>
            <li>Management of companies and enterprises</li>
            <li>Administrative and support, waste management and remediation services</li>
          </ol>
          <h4>Management of companies and enterprises</h4>
          <p>This industry compprises:</p>
          <ol>
            <li>
              Legal entities engaged only in holding the securities of subsidiaries and
              affiliates for the purpose of owning a controlling interest or influencing the
              management decisions of these businesses, or
            </li>
            <li>
              Businesses primarily engaged in adminstering, overseeing, and managing other
              establishments of the company or enterprise and which may also hold the
              securities of their subsidiaries and affiliates.
            </li>
          </ol>
          <h4>Administrative and support, waste management and remediation services</h4>
          <p>This industry comprises of:</p>
          <ol>
            <li>
              Administrative and support services, estabilishments primarily engaged in
              activities such as administration, hiring, and placing personnel,{" "}
            </li>
          </ol>
          <GoabButtonGroup alignment="end" mt="l">
            <GoabButton type="primary" onClick={onClose}>
              I understand
            </GoabButton>
          </GoabButtonGroup>
        </GoabModal>
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
