import {
  GoAAppHeader,
  GoAMicrositeHeader,
  GoAAppFooter,
  GoAPageBlock,
  GoAAppFooterMetaSection,
  GoAOneColumnLayout, GoABlock, GoAFormItem, GoAInput, GoAInputNumber,
} from '@abgov/react-components';
import {FilterChipExamples} from "./filter-chip/FilterChipExamples";
import {useState} from "react";

export function App() {
  const [fullName, setFullName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  function onTextChange(name: string, value: string) {
    switch(name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'accountNumber':
        setAccountNumber(value);
        break;
    }
  }

  function onNumberChange(name: string, value: number) {
    switch(name) {
      case 'price':
        setPrice(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
    }
  }
  return (
    <GoAOneColumnLayout>
      <section slot="header">
        <GoAMicrositeHeader
          type="beta"
          version="React 1.0"
          feedbackUrl="https://github.com/GovAlta/ui-components/issues/new/choose"
        />
        <GoAAppHeader
          url="/"
          heading="Design system templates"
          maxContentWidth="100%"
        />
      </section>

      <GoAPageBlock width="100%">
        <GoABlock gap="m" direction="column">
          <GoAFormItem label="Full Name" mb="xl">
            <GoAInput
                onChange={onTextChange}
                value={fullName}
                name="fullName"
                type="text"
                textAlign="left"
                width="100%"
            />
          </GoAFormItem>

          <GoAFormItem label="Account Number" helpText="This input is right aligned." mb="xl">
            <GoAInput
                onChange={onTextChange}
                value={accountNumber}
                name="accountNumber"
                textAlign="right"
                width="15ch"
            />
          </GoAFormItem>

          <GoAFormItem label="Price" helpText="The input number component is right aligned by default." mb="xl">
            <GoAInputNumber
                onChange={onNumberChange}
                value={price}
                name="price"
                width="7ch"
                trailingContent={<span style={{ whiteSpace: 'nowrap' }}>per item</span>}
            />
          </GoAFormItem>

          <GoAFormItem label="Quantity" helpText="You can set a number input to be left aligned." mb="xl">
            <GoAInputNumber
                onChange={onNumberChange}
                value={quantity}
                name="quantity"
                textAlign="left"
                width="7ch"
            />
          </GoAFormItem>
        </GoABlock>
      </GoAPageBlock>

      <section slot="footer">
        <GoAAppFooter maxContentWidth="100%">
          <GoAAppFooterMetaSection>
            <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9">
              Get help
            </a>
            <a href="https://goa-dio.atlassian.net/wiki/spaces/DS/pages/2342813697/Design+System+Drop-in+hours">
              Drop-in Hours
            </a>
            <a href="https://github.com/GovAlta/ui-components/issues/new/choose">
              Contribute
            </a>
          </GoAAppFooterMetaSection>
        </GoAAppFooter>
      </section>
    </GoAOneColumnLayout>
  );
}

export default App;
