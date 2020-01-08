import React from "react";
import styled from "@emotion/styled";
import { Button } from "dnb-ui-lib/components";
import { H1, H2, P } from "dnb-ui-lib/elements";
import Accordion from "./components/Accordion";
import Popup from "./components/SettingsPopup";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Layout>
      <CustomH1 top="large" bottom={0}>
        Accordion
      </CustomH1>
      <P>Sample Eufemia accordion styling</P>
      <AccordionRow
        top="large"
        // open
      />
      <AccordionRow />
      <H2 top="large">Additional content</H2>
      <Button>Button</Button>
    </Layout>
  );
}

const CustomH1 = styled(H1)`
  color: hotpink;
`;

const AccordionRow = props => (
  <Accordion trigger="Click or touch to open/close" {...props}>
    <table className="dnb-table">
      <caption className="dnb-sr-only">
        A Table Caption, visible only for screen readers
      </caption>
      <thead>
        <tr>
          <th scope="col" colSpan="2" className="dnb-table--no-wrap">
            Avtalenummer
          </th>
          <th scope="col" className="dnb-table--sortable dnb-table--reversed">
            <Button
              variant="tertiary"
              icon="arrow-down"
              text="Sortable"
              title="Sort table row"
            />
          </th>
          <th scope="col" className="dnb-table--sortable dnb-table--active">
            <Button
              variant="tertiary"
              icon="arrow-down"
              text="Active"
              title="Sort table row"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p className="dnb-p">
              Column 1 <b>width p</b>
            </p>
          </td>
          <td>
            <code className="dnb-code">Column 2 with code</code>
          </td>
          <td>
            <span>Column 3 with span</span>
          </td>
          <td>
            <Popup />
          </td>
        </tr>
        <tr>
          <td colSpan="2">Column witch spans over two columns</td>
          <td>Column 3</td>
          <td>
            <Popup />
          </td>
        </tr>
        <tr>
          <td>Column 1</td>
          <td>Column 2</td>
          <td>Column 3</td>
          <td>
            <Popup />
          </td>
        </tr>
      </tbody>
    </table>
  </Accordion>
);
