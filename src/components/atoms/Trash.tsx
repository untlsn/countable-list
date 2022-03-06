import store from '~/store';
import { FaTrash } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';


const Trash = observer(() => {
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
