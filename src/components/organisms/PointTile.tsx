import CheckCircle from '~/components/atoms/CheckCircle';
import Show from '~/providers/Show';
import { observer } from 'mobx-react-lite';
import '~/assets/style/dnd.css';
import classes from '~/data/dndClasses';
import { TiDelete } from 'react-icons/ti';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import DifferenceBar from '~/components/atoms/DifferenceBar';
import { useStore } from '~/store/hooks';



interface PointTileProps {
  id: string
}

const PointTile = observer(({ id }: PointTileProps) => {
  const store = useStore();
  const point = store.points.get(id);


  return (
    <article
      className="bg-white border-l-4 h-20 w-100 p-4 rounded draggable cursor-move relative"
      style={{ 'border-color': point.color }}
      data-id={point.id}
      draggable
      onContextMenu={ev => ev.preventDefault()}
      onDragStart={ev => ev.currentTarget.classList.add(classes.dragging)}
      onDragEnd={ev => ev.currentTarget.classList.remove(classes.dragging)}
    >
      <button
        className={`absolute top-2 right-2 text-2xl text-gray-400 ${store.settings.trashOpen || point.filled ? '' : 'hidden'}`}
        onClick={() => point.remove()}
      >
        <TiDelete />
      </button>
      <div className="flex items-center gap-2">
        <CheckCircle
          onClick={() => point.fill()}
          checked={point.filled}
        />
        <p className={point.filled ? 'line-through' : ''}>{point.name}</p>
        <Show when={point.multi}>
          <DifferenceBar {...point}/>
        </Show>
      </div>
      <Show when={point.multi}>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => point.count -= 1}
          >
            <AiFillMinusCircle className="text-2xl text-main-orange" />
          </button>
          <button
            onClick={() => point.count += 1}
          >
            <AiFillPlusCircle className="text-2xl text-main-orange" />
          </button>
        </div>
      </Show>
    </article>
  );
});

export default PointTile;
