import store from '~/store';
import { observer } from 'mobx-react-lite';


const CatalogHeader = observer(() => {
  return (
    <div class="fixed top-header left-0 w-screen h-catalogs p-4 text-xl bg-main-purple text-white flex items-center gap-2">
      {store.catalogs.map(catalog => (
        <button
          onClick={() => store.openCatalog = catalog}
          class={`${catalog == store.openCatalog ? 'underline' : ''}`}
        >
          {catalog}
        </button>
      ))}
    </div>
  );
});

export default CatalogHeader;
