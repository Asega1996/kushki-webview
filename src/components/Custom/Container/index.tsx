import styled from "styled-components";

import { Container } from "@material-ui/core";

export const CustomContainer = styled(Container)`
  background: linear-gradient(#ffffff, #ffffff);
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export const CustomContainerRaw = styled.div`
  padding-top: 2vh;
`;

export const CustomDivider = styled.div`
  padding: 2px;
`;

export const CenterContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const CustomContainerDatatable = styled.div`
  margin-top: 50px;
  table {
    border: solid 2px #38b1c8;
  }
  thead {
    background: linear-gradient(45deg, #7dd333, #87bfcf);
  }
  thead > tr > th {
    color: white;
    font-weight: bold;
  }
`;
