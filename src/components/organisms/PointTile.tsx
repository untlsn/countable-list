import CheckCircle from '~/components/atoms/CheckCircle';
import Show from '~/providers/Show';
import store from '~/store';
import { observer } from 'mobx-react-lite';
import '~/assets/style/dnd.css';
import classes from '~/data/dndClasses';
import { TiDelete } from 'react-icons/ti';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import DifferenceBar from '~/components/atoms/DifferenceBar';



interface PointTileProps {
  id: string
}

const PointTile = observer(({ id }: PointTileProps) => {
  const point = store.points[id];

  return (
    <article
      class="bg-white border-l-4 h-20 w-100 p-4 rounded draggable cursor-move relative"
      style={{ 'border-color': point.color }}
      data-id={point.id}
      draggable
      onContextMenu={ev => ev.preventDefault()}
      onDragStart={ev => ev.currentTarget.classList.add(classes.dragging)}
      onDragEnd={ev => ev.currentTarget.classList.remove(classes.dragging)}
    >
      <button
        class={`absolute top-2 right-2 text-2xl text-gray-400 ${store.trashInUse || point.isFilled ? '' : 'hidden'}`}
        onClick={() => store.removePoint(point.id)}
      >
        <TiDelete />
      </button>
      <div class="flex items-center gap-2">
        <CheckCircle
          onClick={() => point.setFill()}
          checked={point.maxCount == point.curCount}
        />
        <p class={point.curCount == point.maxCount ? 'line-through' : ''}>{point.name}</p>
        <Show when={point.maxCount > 1}>
          <DifferenceBar {...point}/>
        </Show>
      </div>
      <Show when={point.isMulti}>
        <div class="flex justify-end gap-2">
          <button
            onClick={() => point.changeCount(-1)}
          >
            <AiFillMinusCircle className="text-2xl text-main-orange" />
          </button>
          <button
            onClick={() => point.changeCount(1)}
          >
            <AiFillPlusCircle className="text-2xl text-main-orange" />
          </button>
        </div>
      </Show>
    </article>
  );
});

export default PointTile;
