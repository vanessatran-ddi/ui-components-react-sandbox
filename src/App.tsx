import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout, GoabBlock, GoabFormItem, GoabInput, GoabInputNumber,
} from '@abgov/react-components';
import {FilterChipExamples} from "./filter-chip/FilterChipExamples";
import {useState} from "react";
import {GoabInputOnChangeDetail} from "@abgov/ui-components-common";

export function App() {
  const [fullName, setFullName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
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
        <GoabBlock gap="m" direction="column">
          <GoabFormItem label="Full Name" mb="xl">
            <GoabInput
                onChange={(event: GoabInputOnChangeDetail) => setFullName(event.value)}
                value={fullName}
                name="fullName"
                type="text"
                textAlign="left"
                width="100%"
            />
          </GoabFormItem>

          <GoabFormItem label="Account Number" helpText="This input is right aligned." mb="xl">
            <GoabInput
                onChange={(event: GoabInputOnChangeDetail) => setAccountNumber(event.value)}
                value={accountNumber}
                name="accountNumber"
                textAlign="right"
                width="15ch"
            />
          </GoabFormItem>

          <GoabFormItem label="Price" helpText="The input number component is right aligned by default." mb="xl">
            <GoabInputNumber
                onChange={(event: GoabInputOnChangeDetail<number>) => setPrice(Number(event.value))}
                value={price}
                name="price"
                width="7ch"
                trailingContent={<span style={{ whiteSpace: 'nowrap' }}>per item</span>}
            />
          </GoabFormItem>

          <GoabFormItem label="Quantity" helpText="You can set a number input to be left aligned." mb="xl">
            <GoabInputNumber
                onChange={(event: GoabInputOnChangeDetail<number>) => setQuantity(Number(event.value))}
                value={quantity}
                name="quantity"
                textAlign="left"
                width="7ch"
            />
          </GoabFormItem>
        </GoabBlock>
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
