import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: rgb(47, 47, 55);
  background: rgb(159, 179, 194);
  border: 1px solid transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;
