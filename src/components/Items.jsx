import React from 'react';
import KeeperAppContext from '../Context/KeeperAppContext';
import { useContext } from 'react';
import Note from './Note';

function Items() {
  const { items } = useContext(KeeperAppContext);
  return items.map((val, ind) => (
    <Note
      key={ind}
      id={ind}
      title={val.title}
      content={val.content}
      value={val}
    />
  ));
}

export default Items;
