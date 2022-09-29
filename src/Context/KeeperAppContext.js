import { createContext, useState } from 'react';

const KeeperAppContext = createContext();

export const KeeperAppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [keeperEdit, setKeeperEdit] = useState({
    value: {},
    id: NaN,
    edit: false,
  });

  function addItems(areaText) {
    setItems((prevValue) => {
      return [...prevValue, areaText];
    });
  }

  function deleteItems(id) {
    setItems((prevValue) => {
      return prevValue.filter((val, ind) => {
        return ind !== id;
      });
    });
  }

  function editItems(value, id) {
    setKeeperEdit({
      value, // or value:value,
      id,
      edit: true,
    });
  }

  function updateItems(id, updItem) {
    setItems(
      items.map((val, ind) => {
        return ind === id ? { ...val, ...updItem } : val;
      })
    );
    setKeeperEdit({
      value: {},
      id: NaN,
      edit: false,
    });
  }

  return (
    <KeeperAppContext.Provider
      value={{
        items,
        keeperEdit,
        addItems,
        deleteItems,
        editItems,
        updateItems,
      }}
    >
      {children}
    </KeeperAppContext.Provider>
  );
};

export default KeeperAppContext;
