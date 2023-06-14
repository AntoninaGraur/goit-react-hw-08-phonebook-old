import styled from '@emotion/styled';

export const RegistrContainer = styled.div`
  padding: 30px 30px;
  margin: 0 auto;
  background-color: #d5e4ea8c;
  align-items: center;
  flex-direction: column;
  display: flex;
`;


export const RegistrInput = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px 10px;
  border-radius: 20px;
  border: 2px solid #2f2d2e;
  box-shadow: 4px 14px 30px -1px rgba(3, 76, 57, 0.51);
  outline: transparent;
`;

export const RegistrButton = styled.button`
  min-width: 120px;
  padding: 10px 10px;
  color: #050919d6;
  background-color: #2ae290f5;
  border-radius: 20px;
  border: transparent;
  outline: transparent;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  box-shadow: -1px 8px 20px -3px rgba(0, 0, 0, 0.43);

  &:hover {
    transform: scale(1.04);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;
