import styled from "styled-components";
import {Button} from "@material-ui/core";


export const ComplexButton = styled(Button)`
    margin: 30px;
    color: white;
    background-color: #7dd333;
    &:hover{
        color: white;
        background-color: rgba(0, 0, 0, 0.54);
    }
`;