import { observer } from 'mobx-react-lite';
import PointTile from '~/components/organisms/PointTile';
import DnDWrapper from '~/providers/DnDWrapper';
import Trash from '~/components/atoms/Trash';
import CatalogHeader from '~/components/organisms/CatalogHeader';

const Index = observer(() => {
  return (
    <div class='flex gap-4 flex-col items-center justify-center min-h-screen bg-gray-200'>
      <CatalogHeader />
      <DnDWrapper
        render={(id: string) => <PointTile key={id} id={id} />}
      />
      <Trash />
    </div>
  );
});

export default Index;
