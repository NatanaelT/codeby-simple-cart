import { Paper, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledCartPaper = styled(Paper)`
  margin-top: 10px;
  background: white;
  /* width: 100%; */
  height: calc(100vh - 50px);
  border-radius: 15px !important;
`;

export const StyledProductContainer = styled.div`
  height: calc(100vh - 80px - 100px - 60px - 52px);
  overflow: auto;
`;

export const StyledTotal = styled.p`
  font-size: 1.25rem;
  color: #37352f;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const StyledTitle = styled(Typography)`
  font-weight: 700;
  color: #0a1929;
  font-size: 2rem;
  text-align: center;
  margin: 0px;
`;

export const StyledContentContainer = styled.div`
  padding: 15px;
`;

export const StyledTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const StyledFooterContainer = styled.div`
  height: 40px;
  padding: 15px;
`;
