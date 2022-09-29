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

            if (keeperEdit.edit === true) {
              updateItems(keeperEdit.id, areaText);
            } else {
              addItems(areaText);
            }
            setAreaText({
              title: '',
              content: '',
            });
          }}
        >
          <IoIosAdd size={30} />
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
