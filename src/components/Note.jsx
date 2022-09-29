import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import KeeperAppContext from '../Context/KeeperAppContext';

function Note({ title, content, id, value }) {
  const { deleteItems, editItems } = useContext(KeeperAppContext);

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          deleteItems(id);
        }}
      >
        <MdDelete size={30} />
      </button>

      <button
        onClick={() => {
          editItems(value, id);
        }}
      >
        <FaEdit size={25} />
      </button>
    </div>
  );
}

export default Note;
