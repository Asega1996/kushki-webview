import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';

import {Icon} from '@material-ui/core';

export const CustomIcon = styled(Icon)`
    padding: 15px;
    color: #ED9896
`;

export const CustomClearIcon = styled(ClearIcon)`
    width: 37px;
    height: 37px;
    color: white;
    background-color: #7dd333;
    cursor: pointer;
    border-radius: 2px;
    box-shadow: 
    0 3px 1px -2px rgba(0,0,0,0.2), 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 1px 5px 0 rgba(0,0,0,0.12);
    &:hover{
        color: white;
        background-color: rgba(0, 0, 0, 0.54);
    }
`;