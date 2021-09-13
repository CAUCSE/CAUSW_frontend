import styled from 'styled-components';

export const SigninWrapper = styled.div`
  width: 375px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputWrapper = styled.div`
  align-items: left;
`;

export const Input = styled.input`
  width: 300px;
  height: 23px;

  border: 0;
  border-bottom: 1px solid #a3a1a1;

  ::placeholder {
    color: #8f8f8f;
    font-size: 14px;
  }
`;

export const Title = styled.div`
  letter-spacing: -0.333333px;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  color: #3f4040;
  margin-bottom: 5px;
`;

const Caption = styled.div`
  letter-spacing: -0.333333px;
  font-size: 14px;
  line-height: 16px;
  color: #ff7473;

  margin-top: 8px;
`;

export const CommonInput = ({ title, value, placeholder, caption, ...rest }) => (
  <InputWrapper>
    <Title>{title}</Title>
    <Input value={value} placeholder={placeholder} {...rest}></Input>
    <Caption>{caption}</Caption>
  </InputWrapper>
);

export const SubmitButton = styled.button`
  width: 309px;
  height: 40px;
  background: #312ed7;
  border-radius: 30px;
  border: 0px solid #cccccc;

  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-size: 18px;
`;
