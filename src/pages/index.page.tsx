import store from '~/store';
import { observer } from 'mobx-react-lite';
import PointTile from '~/components/organisms/PointTile';
import DnDWrapper from '~/providers/DnDWrapper';
import Trash from '~/components/atoms/Trash';

const Index = observer(() => {
  return (
    <div class='flex gap-4 flex-col items-center justify-center min-h-screen bg-gray-200'>
      <DnDWrapper
        render={(id: string) => {
          const point = store.points[id];
          return (
            <PointTile key={id} {...point} />
          );
        }}
      />
      <Trash />
    </div>
  );
});

export default Index;
