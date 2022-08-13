import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledPrice = styled.span`
  font-size: 0.725rem;
  color: #a5a5a5;
  font-weight: bold;
  text-decoration: line-through;
`;

export const StyledSellingPrice = styled.span`
  font-size: 0.875rem;
  color: #37352f;
  font-weight: bold;
`;

export const StyledProductName = styled.p`
  font-size: 0.875rem;
  color: #37352f;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const StyledTotal = styled.p`
  margin-top: 0px;
`;

export const StyledProductImg = styled.img`
  width: 110px;
  height: 110px;
  transition: transform .2s;
  :hover {
    transform: scale(1.1);
  }
`;
