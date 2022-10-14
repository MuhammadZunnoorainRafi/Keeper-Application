import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import KeeperAppContext from '../Context/KeeperAppContext';

function CreateNote() {
  const { addItems, keeperEdit, updateItems } = useContext(KeeperAppContext);

  const [areaText, setAreaText] = useState({
    title: '',
    content: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (keeperEdit.edit === true) {
      setAreaText(keeperEdit.value);
    }
  }, [keeperEdit]);

  function handleChange(event) {
    const { name, value } = event.target;
    setAreaText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  setTimeout(() => {
    setMessage(null);
  }, 3000);

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={areaText.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
          value={areaText.content}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if ((areaText.title || areaText.content) === '') {
              setMessage('Please Enter Something');
            } else {
              setMessage(null);
              if (keeperEdit.edit === true) {
                updateItems(keeperEdit.id, areaText);
              } else {
                addItems(areaText);
              }
              setAreaText({
                title: '',
                content: '',
              });
            }
          }}
        >
          <IoIosAdd size={30} />
        </button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default CreateNote;
