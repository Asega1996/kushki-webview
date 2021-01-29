import styled from "styled-components";

export const CustomTitle = styled.h1`
    font-weight: bold;
    color: #ED9896;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    text-shadow: 1px 0 #B22825, -1px 0 #B22825, 0 -1px #B22825, 0 1px #B22825;
`;

export const CustomSubTitle = styled.h2`
    font-weight: bold;
    color: #38B1C8;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 15px;
    text-shadow: 1px 0 #ed9895, -1px 0 #ed9895, 0 -1px #ed9895, 0 1px #ed9895;
`;


export const BoldSpan = styled.span`
    font-weight: bold
`;

export const CustomSpanStatus = styled.span`
    color: ${props => props.children?.toString() === 'Alive' ? 'green' : props.children?.toString() === 'Dead' ? 'red' : '#b1b100'};
`;

export const CustomAttributeComparer = styled.span`
    color: grey;
`;
