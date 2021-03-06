import { observer } from 'mobx-react-lite';
import CatalogHeader from '~/components/organisms/CatalogHeader';
import DnDWrapper from '~/providers/DnDWrapper';
import PointTile from '~/components/organisms/PointTile';
import Trash from '~/components/atoms/Trash';

const Index = observer(() => {
  return (
    <div className='flex gap-4 flex-col items-center justify-center min-h-screen'>
      <CatalogHeader />
      <DnDWrapper
        render={(id: string) => <PointTile key={id} id={id} />}
      />
      <Trash />
    </div>
  );
});

export default Index;
