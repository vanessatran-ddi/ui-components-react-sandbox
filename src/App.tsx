import {
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabAppFooter,
  GoabPageBlock,
  GoabAppFooterMetaSection,
  GoabOneColumnLayout, GoabButtonGroup, GoabButton, GoabModal, GoabIcon,
} from '@abgov/react-components';
import {useState} from "react";

export function App() {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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
        <GoabButton onClick={onClick}>Show alert dialog with a close button</GoabButton>
        
        <GoabButton onClick={() => setAlertOpen(true)}>Show Alert Dialog without a close button</GoabButton>

        <GoabButton onClick={() => setDialogOpen(true)}>Show Regular Dialog</GoabButton>
        
        <GoabModal 
          heading="Alert!" 
          open={alertOpen} 
          role="alertdialog"
          maxWidth="60%"
        >
          <strong>This industry is made up of two major sub-industries:</strong>
          <ol>
            <li>Wholesale trade</li>
            <li>Retail trade</li>
          </ol>
          <strong>Wholesale trade</strong>
          <p>
            This industry comprises establishments primarily engaged in wholesaling
            merchandise. The wholesaling process is an intermediate step in the
            distribution of goods. Many wholesalers are organized to sell
            merchandise in large quantities to retailers, and business and
            institutional clients.
          </p>
          <p>
            Subsectors include wholesalers of, farm products, petroleum, petroleum
            products, and other hydrocarbons, food, beverage and tobacco, motor
            vehicle and motor vehicle parts and accessories, building material and
            supplies, machinery, equipment, and supplies.
          </p>
          <strong>Retail trade</strong>
          <p>
            This industry comprises establishments primarily engaged in retailing
            merchandise. The retailing process is the final step in the distribution
            of merchandise; retailers are therefore organized to sell merchandise in
            small quantities to the general public. Internet retail, direct selling,
            and mail-order retail are not separately classified from traditional
            in-store (also known as "brick and mortar") retail. Units that engage in
            retailing by any of these methods are classified based on the type of
            goods sold. Meanwhile, vending machine operators are grouped width
            convenience retailers.
          </p>
          <p>
            Subsectors include retailers and dealers of, motor vehicles and parts,
            building materials and garden equipment and supplies, food and beverage,
            furniture, home furnishings, electronics and appliances and general
            merchandise, health and personal care, gasoline stations and fuel,
            clothing, clothing accessories, shoes, jewelry, luggage and leather
            goods, sporting goods, hobby, musical instrument, book, and
            miscellaneous retailers.
          </p>
          <p style={{ marginTop: "3rem", marginBottom: "0.5rem"}}>
            For more information please see:
          </p>
          <p style={{ marginBottom: "0" }}>
            <a
                href="/"
                target="_blank"
            >
              Wholesale trade (NAICS - 41) - Statistics Canada{" "}
              <GoabIcon type="open" size="small" />
            </a>
            <br />
            <a
                href="/"
                target="_blank"
            >
              Retail Trade (NAICS - 44-45) - Statistics Canada{" "}
              <GoabIcon type="open" size="small" />
            </a>
            <GoabButtonGroup alignment="end" mt="l">
              <GoabButton type="primary" onClick={() => setAlertOpen(false)}>
                I understand
              </GoabButton>
            </GoabButtonGroup>
          </p>
        </GoabModal>
        
        <GoabModal 
          heading="Information" 
          open={dialogOpen} 
          role="dialog"
          maxWidth="60%"
          onClose={() => setDialogOpen(false)}
        >
          <strong>This industry is made up of two major sub-industries:</strong>
          <ol>
            <li>Wholesale trade</li>
            <li>Retail trade</li>
          </ol>
          <strong>Wholesale trade</strong>
          <p>
            This industry comprises establishments primarily engaged in wholesaling
            merchandise. The wholesaling process is an intermediate step in the
            distribution of goods. Many wholesalers are organized to sell
            merchandise in large quantities to retailers, and business and
            institutional clients.
          </p>
          <p>
            Subsectors include wholesalers of, farm products, petroleum, petroleum
            products, and other hydrocarbons, food, beverage and tobacco, motor
            vehicle and motor vehicle parts and accessories, building material and
            supplies, machinery, equipment, and supplies.
          </p>
          <strong>Retail trade</strong>
          <p>
            This industry comprises establishments primarily engaged in retailing
            merchandise. The retailing process is the final step in the distribution
            of merchandise; retailers are therefore organized to sell merchandise in
            small quantities to the general public. Internet retail, direct selling,
            and mail-order retail are not separately classified from traditional
            in-store (also known as "brick and mortar") retail. Units that engage in
            retailing by any of these methods are classified based on the type of
            goods sold. Meanwhile, vending machine operators are grouped width
            convenience retailers.
          </p>
          <p>
            Subsectors include retailers and dealers of, motor vehicles and parts,
            building materials and garden equipment and supplies, food and beverage,
            furniture, home furnishings, electronics and appliances and general
            merchandise, health and personal care, gasoline stations and fuel,
            clothing, clothing accessories, shoes, jewelry, luggage and leather
            goods, sporting goods, hobby, musical instrument, book, and
            miscellaneous retailers.
          </p>
          <p style={{ marginTop: "3rem", marginBottom: "0.5rem"}}>
            For more information please see:
          </p>
          <p style={{ marginBottom: "0" }}>
            <a
                href="/"
                target="_blank"
            >
              Wholesale trade (NAICS - 41) - Statistics Canada{" "}
              <GoabIcon type="open" size="small" />
            </a>
            <br />
            <a
                href="/"
                target="_blank"
            >
              Retail Trade (NAICS - 44-45) - Statistics Canada{" "}
              <GoabIcon type="open" size="small" />
            </a>
            <GoabButtonGroup alignment="end" mt="l">
              <GoabButton type="primary" onClick={() => setDialogOpen(false)}>
                I understand
              </GoabButton>
            </GoabButtonGroup>
          </p>
        </GoabModal>
        
        <GoabModal heading="Industry Description" open={open} maxWidth="60%" role={"alertdialog"} onClose={() => setOpen(false)}>
          <strong>This industry is made up of two major sub-industries:</strong>
          <ol>
            <li>Wholesale trade</li>
            <li>Retail trade</li>
          </ol>
          <strong>Wholesale trade</strong>
          <p>
            This industry comprises establishments primarily engaged in wholesaling
            merchandise. The wholesaling process is an intermediate step in the
            distribution of goods. Many wholesalers are organized to sell
            merchandise in large quantities to retailers, and business and
            institutional clients.
          </p>
          <p>
            Subsectors include wholesalers of, farm products, petroleum, petroleum
            products, and other hydrocarbons, food, beverage and tobacco, motor
            vehicle and motor vehicle parts and accessories, building material and
            supplies, machinery, equipment, and supplies.
          </p>
          <strong>Retail trade</strong>
          <p>
            This industry comprises establishments primarily engaged in retailing
            merchandise. The retailing process is the final step in the distribution
            of merchandise; retailers are therefore organized to sell merchandise in
            small quantities to the general public. Internet retail, direct selling,
            and mail-order retail are not separately classified from traditional
            in-store (also known as "brick and mortar") retail. Units that engage in
            retailing by any of these methods are classified based on the type of
            goods sold. Meanwhile, vending machine operators are grouped width
            convenience retailers.
          </p>
          <p>
            Subsectors include retailers and dealers of, motor vehicles and parts,
            building materials and garden equipment and supplies, food and beverage,
            furniture, home furnishings, electronics and appliances and general
            merchandise, health and personal care, gasoline stations and fuel,
            clothing, clothing accessories, shoes, jewelry, luggage and leather
            goods, sporting goods, hobby, musical instrument, book, and
            miscellaneous retailers.
          </p>
          <p style={{ marginTop: "3rem", marginBottom: "0.5rem"}}>
            For more information please see:
          </p>
          <p style={{ marginBottom: "0" }}>
            <a
                href="/"
                target="_blank"
            >
              Wholesale trade (NAICS - 41) - Statistics Canada{" "}
              <GoabIcon type="open" size="small" />
            </a>
            <br />
            <a
                href="/"
                target="_blank"
            >
              Retail Trade (NAICS - 44-45) - Statistics Canada{" "}
              <GoabIcon type="open" size="small" />
            </a>
            <GoabButtonGroup alignment="end" mt="l">
              <GoabButton type="primary" onClick={onClose}>
                I understand
              </GoabButton>
            </GoabButtonGroup>
          </p>
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
