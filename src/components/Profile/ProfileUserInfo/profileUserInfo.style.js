import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 5rem;
  border-bottom: 1px solid var(--borderGray);
  gap: 4rem;
  font-size: 1.2rem;
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
