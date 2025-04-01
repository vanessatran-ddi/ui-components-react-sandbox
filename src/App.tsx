import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout,
  GoabButton,
  GoabModal,
  GoabButtonGroup,
  GoabFormItem,
  GoabRadioGroup,
  GoabCheckbox,
  GoabDropdown,
  GoabDropdownItem,
  GoabRadioItem
} from '@abgov/react-components';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState(false);
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
      <GoabButton onClick={() => setOpen(true)}>Open Basic Modal</GoabButton>
<GoabModal
  heading="Heading"
  role="dialog"
  open={open}
  onClose={() => setOpen(false)}
  actions={
    <GoabButtonGroup alignment="end">
      <GoabButton type="secondary" onClick={() => setOpen(false)}>
        Secondary
      </GoabButton>
      <GoabButton type="primary" onClick={() => setOpen(false)}>
        Primary
      </GoabButton>
    </GoabButtonGroup>
  }
>
<GoabFormItem label="Entry status">
          <GoabCheckbox text="Draft" value="draft" name={"entryStatus"}></GoabCheckbox>
          <GoabCheckbox text="Published" value="published" name={"entryStatus"}></GoabCheckbox>
        </GoabFormItem>
        <GoabFormItem label="Assigned to - Region">
          <GoabCheckbox text="Calgary" value="calgary" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Central" value="central" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Edmonton" value="edmonton" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="North" value="north" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="South" value="south" name={"region"}></GoabCheckbox>
        </GoabFormItem>
        <GoabFormItem label="Assigned to">
          <GoabDropdown
            name="assignedTo"
            onChange={() => {
              /* do something */
            }}>
            <GoabDropdownItem value={"1"} label="Person 1"></GoabDropdownItem>
            <GoabDropdownItem value={"2"} label="Person 2"></GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>
        <GoabFormItem label="Taken by - Region" mt={"xs"}>
          <GoabCheckbox text="Calgary" value="calgary" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Central" value="central" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="Edmonton" value="edmonton" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="North" value="north" name={"region"}></GoabCheckbox>
          <GoabCheckbox text="South" value="south" name={"region"}></GoabCheckbox>
        </GoabFormItem>
        <GoabFormItem label="Taken by">
          <GoabDropdown
            name="takenBy"
            onChange={() => {
              /* do something */
            }}>
            <GoabDropdownItem value={"1"} label="Person 1"></GoabDropdownItem>
            <GoabDropdownItem value={"2"} label="Person 2"></GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>
        <GoabFormItem label="Date taken" mt={"xs"}>
          <GoabRadioGroup
            name={"dateTaken"}
            onChange={() => {
              /** do something **/
            }}>
            <GoabRadioItem value="24" label="Last 24 hours"></GoabRadioItem>
            <GoabRadioItem value="72" label="Last 72 hours"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>



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
