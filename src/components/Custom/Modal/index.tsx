import styled from "styled-components";
import {Fade, Modal} from "@material-ui/core";

export const CustomModal = styled(Modal)`
      display: flex;
      align-items: center;
      justify-content: center;
`;

export const CustomFade = styled(Fade)`
      width: 70%;
      background-color: white;
      border: 2px solid #7dd333;
      border-radius: 5px;
      box-shadow: 2px 2px black;
`;

export const TitleModal = styled.div`
      color: white;
      font-size: 3vh;
      text-align: center;
      background-color: #7dd333;
      text-shadow: 1px 0 black, -1px 0 black, 0 -1px black, 0 1px black;
`;