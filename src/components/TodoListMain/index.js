import React, { useState } from 'react';
import {
  TodoListContainer,
  TodoListWrapper,
  ListBoxWrapper,
  TopOption,
  TitleWrapper,
  ListInputWrap,
  AddListInput,
  FlexRow,
  ListInputSearch,
  NavigatorWrap,
} from './styled';
import ListTodo from './components/ListTodo';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TodoListMain = () => {
  const TodoList = JSON.parse(localStorage.getItem('todolist'));
  const HistoryList = JSON.parse(localStorage.getItem('history'));
  const [triggerState, setTriggerState] = useState(true);
  const [NewTodo, setNewTodo] = useState('');
  const [searchTodo, setSearchTodo] = useState('');

  //Enter New Todo
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (!NewTodo) return null;

      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        completed: false,
        title: NewTodo,
      };

      if (!TodoList) {
        localStorage.setItem('todolist', JSON.stringify([newTodo]));
      } else {
        let newDataTodo = [newTodo, ...TodoList];
        localStorage.setItem('todolist', JSON.stringify(newDataTodo));
      }

      if (!HistoryList) {
        localStorage.setItem(
          'history',
          JSON.stringify([
            `Add - id: ${newTodo.id}, title: ${
              newTodo.title
            }  ${moment().format('DD/MM/YYYY, hh:mm:ss')}`,
          ])
        );
      } else {
        const newHistory = [
          `Add - id: ${newTodo.id}, title: ${newTodo.title}  ${moment().format(
            'DD/MM/YYYY, hh:mm:ss'
          )}`,
          ...HistoryList,
        ];
        localStorage.setItem('history', JSON.stringify(newHistory));
      }

      setNewTodo('');
    }
  };
  return (
    <TodoListContainer>
      <TodoListWrapper>
        <NavigatorWrap>
          <Link to="/history">History</Link>
        </NavigatorWrap>
        <TopOption>
          <FlexRow>
            <TitleWrapper>Tasks</TitleWrapper>
            {
              //Search
            }
            <ListInputWrap>
              <ListInputSearch
                placeholder="Search"
                onChange={(e) => setSearchTodo(e.target.value)}
                value={searchTodo}
              />
            </ListInputWrap>
          </FlexRow>
          {
            //Input
          }
          <ListInputWrap style={{ width: '100%' }}>
            <AddListInput
              minRows={1}
              placeholder="Add your todo..."
              onChange={(e) => setNewTodo(e.target.value)}
              value={NewTodo}
              onKeyDown={handleKeyDown}
            />
          </ListInputWrap>
        </TopOption>
        <ListBoxWrapper>
          {searchTodo ? (
            <ListTodo
              TodoList={TodoList.filter((e) => e.title.includes(searchTodo))}
              trigger={() => setTriggerState(!triggerState)}
            />
          ) : (
            <ListTodo
              TodoList={TodoList}
              trigger={() => setTriggerState(!triggerState)}
            />
          )}
        </ListBoxWrapper>
      </TodoListWrapper>
    </TodoListContainer>
  );
};

export default TodoListMain;
