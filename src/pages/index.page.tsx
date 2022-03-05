import store from '~/store';
import { observer } from 'mobx-react-lite';
import Button from '~/components/atoms/Button';
import PointTile from '~/components/organisms/PointTile';


const Index = observer(() => {
  return (
    <div class='flex gap-4 flex-col items-center justify-center min-h-screen bg-gray-200'>
      {
        store.pointsArr.map(point => <PointTile {...point} />)
      }
      <Button>
        Clear
      </Button>
    </div>
  );
});

export default Index;
