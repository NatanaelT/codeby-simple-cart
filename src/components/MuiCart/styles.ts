import { Chip, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledCartPaper = styled(Paper)`
  background: white;
  min-width: 350px;
  max-height: calc(100vh - 50px);
  border-radius: 15px !important;
`;

export const StyledTotal = styled.p`
  font-size: 1.25rem;
  color: #37352f;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;
`;
