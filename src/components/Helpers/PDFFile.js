import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";






const PDFFile = (props) => {


  return (
    <Document>
      <Page>

      {props.children}
      </Page>
    </Document>
  );
};

export default PDFFile;