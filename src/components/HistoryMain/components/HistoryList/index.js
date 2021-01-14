import React, { useState, useEffect } from 'react';
import { ListWrapper, List, ListInput, InlineFlex } from './styled';

const HistoryList = ({ Lists }) => {
  return (
    <ListWrapper>
      {
        //List
      }
      {Lists &&
        Lists.map((e) => (
          <List key={e.id}>
            <InlineFlex style={{ width: '100%' }}>
              <ListInput disabled={true} defaultValue={e} value={e} />
            </InlineFlex>
          </List>
        ))}
    </ListWrapper>
  );
};

export default HistoryList;
