import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 100%;
`;

export const List = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background: #fff;
    border-radius: 20px;
    margin 10px 0px;
    justify-content: space-between;
`;

export const SettingIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
  right: 10px;
  font-weight: bold;
`;

export const ListInput = styled(TextareaAutosize)`
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

export const TextContentEditable = styled.div.attrs(() => ({}))`
  outline: none;
  border: none;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  width: 80%;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  -webkit-user-modify: ${({ readonly }) => readonly && 'read-only'};
`;

export const InlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const SaveBtn = styled.button`
  outline: none;
  background: #585292;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  outline: none;
  background: #e07c7c;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
