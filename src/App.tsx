import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout,
  GoabDropdownItem,
  GoabDropdown,
  GoabFormItem
} from '@abgov/react-components';

export function App() {
  return (
    <><GoabOneColumnLayout>
      <section slot="header">
        <GoabMicrositeHeader
          type="beta"
          version="React 1.0"
          feedbackUrl="https://github.com/GovAlta/ui-components/issues/new/choose" />
        <GoabAppHeader
          url="/"
          heading="Design system templates"
          maxContentWidth="100%" />
      </section>

      <GoabPageBlock width="100%">
        <div style={{marginTop: "1000px"}}></div>
      <GoabFormItem label="Basic dropdown">
        <GoabDropdown name="item" value="" onChange={(e) => console.log(e)}>
          <GoabDropdownItem value="red" label="Red"></GoabDropdownItem>
          <GoabDropdownItem value="green" label="Green"></GoabDropdownItem>
          <GoabDropdownItem value="blue" label="Blue"></GoabDropdownItem>
        </GoabDropdown>
      </GoabFormItem>
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
    </>
  );
}

export default App;
