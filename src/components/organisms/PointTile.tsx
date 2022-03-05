import CheckCircle from '~/components/atoms/CheckCircle';
import SquareCount from '~/components/atoms/SquareCount';
import Button from '~/components/atoms/Button';
import { ToDoPoint } from '~/store/types';
import Show from '~/providers/Show';
import store from '~/store';
import { observer } from 'mobx-react-lite';

interface PointTileProps extends ToDoPoint {
}

const PointTile = observer((props: PointTileProps) => {
  const changeCount = (num: number) => store.points[props.id].curCount + num;
  const isMulti = props.maxCount != 1;

  return (
    <article
      class="bg-white border-l-4 h-20 w-100 p-4 rounded sortable"
      style={{ 'border-color': props.color }}
    >
      <div class="flex items-center gap-2">
        <Show
          when={isMulti}
          fallback={(
            <CheckCircle
              onClick={() => changeCount(props.maxCount == props.curCount ? -1 : 1)}
              checked={props.maxCount == props.curCount}
            />
          )}
        >
          <SquareCount {...props}/>
        </Show>
        <p class={props.curCount == props.maxCount ? 'line-through' : ''}>{props.name}</p>
      </div>
      <Show when={isMulti}>
        <div class="flex justify-end gap-2">
          <Button
            onClick={() => props.curCount > 0 && changeCount(-1)}
          >
            Decrement
          </Button>
          <Button
            onClick={() => props.curCount < props.maxCount && changeCount(1)}
          >
            Increment
          </Button>
        </div>
      </Show>
    </article>
  );
});

export default PointTile;
