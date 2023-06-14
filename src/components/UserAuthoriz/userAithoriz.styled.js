import styled from "@emotion/styled";


export const LogoutContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const Avatar = styled.img`
width: 40px;

height: auto;
`;

export const LogoutBtn = styled.button`
  min-width: 45px;
  padding: 7px 10px;
  color: #151216d6;
  background-color: #03a9f4;
  border-radius: 20px;
  border: transparent;
  outline: transparent;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  margin-left: 15px;
  box-shadow: -1px 8px 20px -3px rgba(0, 0, 0, 0.43);
  display: inline-block;
  &:hover {
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;
