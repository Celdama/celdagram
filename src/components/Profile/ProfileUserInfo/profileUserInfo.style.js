import styled from 'styled-components';
import breakpoints from '../../../Helpers/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 0rem;
  border-bottom: 1px solid var(--borderGray);
  gap: 4rem;
  font-size: 1.2rem;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 1.2rem 5rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h4 {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
  }
`;

export const UserSocialInfo = styled.div`
  display: flex;
  gap: 1.3rem;
  margin: 0.4rem 0;
`;
