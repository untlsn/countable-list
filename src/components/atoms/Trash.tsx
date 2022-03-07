import store from '~/store';
import { FaTrash } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';
import useClear from '~/hooks/useClear';


const Trash = observer(() => {
  useClear(() => {
    store.trashInUse = false;
  });

  return (
    <FaTrash
      className={`fixed bottom-8 right-8 text-3xl cursor-pointer ${store.trashInUse ? 'opacity-50' : ''}`}
      onClick={() => {
        store.trashInUse = !store.trashInUse;
      }}
    />
  );
});

export default Trash;
