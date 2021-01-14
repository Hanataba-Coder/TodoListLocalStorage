import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  ListBoxWrapper,
  TopOption,
  TitleWrapper,
  NavigatorWrap,
  FlexRow,
} from './styled';
import HistoryList from './components/HistoryList';
import { Link } from 'react-router-dom';

const HistoryMain = () => {
  const HistoryLists = JSON.parse(localStorage.getItem('history'));
  const [triggerState, setTriggerState] = useState(true);

  const clearHistory = () => {
    localStorage.setItem('history', JSON.stringify([]));
    setTriggerState(!triggerState);
  };

  return (
    <Container>
      <Wrapper>
        <NavigatorWrap>
          <Link to="/">
            <i className="fas fa-arrow-left" style={{ marginRight: 5 }}></i>Todo
          </Link>
        </NavigatorWrap>
        <TopOption>
          <FlexRow>
            <TitleWrapper>History</TitleWrapper>
            <i
              style={{ cursor: 'pointer', color: '#e07c7c' }}
              className="fas fa-eraser"
              onClick={clearHistory}
            >
              {' '}
              clear all
            </i>
          </FlexRow>
        </TopOption>
        <ListBoxWrapper>
          <HistoryList Lists={HistoryLists} />
        </ListBoxWrapper>
      </Wrapper>
    </Container>
  );
};

export default HistoryMain;
