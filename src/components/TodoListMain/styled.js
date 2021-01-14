import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const TodoListContainer = styled.div`
  position: relative;
  z-index: 10;
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;
export const TodoListWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  width: 60vw;
  max-height: 1100px;
  height: 70vh;
  padding: 50px;
  background: #f5f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 25px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 20px;
    padding-top: 40px;
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
  }
`;
export const TodoListGridBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr 10fr;
  grid-gap: 10px;
  height: 100%;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const ProgessBarBoxWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: #e07c7c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  padding: 30px;
  border-radius: 30px;

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const ProgessBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(1.3rem, auto);
  width: calc(100%);
`;

export const ProgressBar = styled.div`
  border-radius: 10px;
  border: transparent;
  position: relative;
  background: #3b3b3b;
  width: 100%;
  height: 15px;

  &::before {
    position: absolute;
    content: '';
    text-align: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: ${({ percent }) => (percent ? percent : '0')}%;
    background: #fff;
    border-radius: 10px;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 105%;
  }
`;

export const ProgessBarTextWrapper = styled.div`
  font-size: 30px;
`;

export const ProgressTextComplate = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

export const ListBoxWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 0px;
  overflow: auto;
  height: 80%;
`;

export const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 80%;
`;

export const List = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background: #fff;
    border-radius: 20px;
    margin 10px 0px;
`;

export const SettingIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
  right: 10px;
  font-weight: bold;
`;
export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;

  &:checked {
    background: red;
  }
`;
export const TopOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ListInput = styled.input`
  outline: none;
  border: none;
`;

export const ListInputWrap = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background: #fff;
    border-radius: 20px;
    margin 10px 0px;
    justify-content: space-between;
`;

export const AddListInput = styled(TextareaAutosize)`
  padding-top: 7px;
  resize: none;
  outline: none;
  border: none;
  width: 100%;
  overflow: hidden;
  min-height: 30px;
  background: #fff;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`;

export const ListInputSearch = styled.input`
  outline: none;
  border: none;
  width: 100%;
  overflow: hidden;
  min-height: 30px;
  background: #fff;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavigatorWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: bold;

  & a {
    text-decoration: none;
    background: linear-gradient(
      45deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
