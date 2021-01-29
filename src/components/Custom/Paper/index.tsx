import styled from "styled-components";

import {Paper} from "@material-ui/core";

export const InlinePaperFilter = styled(Paper)`
    display: inline-block;
    width: 50%;
`;

export const InlinePaper = styled(Paper)`
    display: inline-block;
`;

export const BlockPaper = styled(InlinePaper)`
    display: inline-block;
    border-radius: 20px;
`;