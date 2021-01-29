import styled from 'styled-components';

import { ListItem } from '@material-ui/core';

export const ListItemCenter = styled(ListItem)`
  text-align: center;
`;

export const ListItemCard = styled(ListItem)`
  text-align: center;
  background-color: white;
  border-radius: 5px;
`;

export const ListItemMenu = styled(ListItem)`
    &:hover{
        background: rgb(0, 0, 0, 0.05);
        border-radius: 15px;
    }  
`;



