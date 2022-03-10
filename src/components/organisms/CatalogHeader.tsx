import store from '~/store';
import { observer } from 'mobx-react-lite';


const CatalogHeader = observer(() => {
  return (
    <div className="fixed top-header left-0 w-screen h-catalogs p-4 text-xl bg-main-purple text-white flex items-center gap-2">
      {store.catalogs.keys.map(catalog => (
        <button
          onClick={() => store.catalogs.open = catalog}
          className={`${store.catalogs.isOpen(catalog) ? 'underline' : ''}`}
        >
          {catalog}
        </button>
      ))}
    </div>
  );
});

export default CatalogHeader;
