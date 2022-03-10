import classes from '~/data/dndClasses';
import { observer } from 'mobx-react-lite';
import { useStore } from '~/store/hooks';

const getDragAfterId = (container: HTMLElement, y: number) => {
  const rest = container.querySelectorAll(`.${classes.draggable}:not(.${classes.dragging})`);

  let element = undefined as any as Element;
  let offset = Number.NEGATIVE_INFINITY;

  rest.forEach(el => {
    const box = el.getBoundingClientRect();
    const elOffset = y - box.top - box.height / 2;

    if (elOffset < 0 && elOffset > offset) {
      element = el;
      offset = elOffset;
    }
  });

  return element ? element.getAttribute('data-id') as string : undefined;
};

interface DnDWrapperProps {
  render(id: string): any
}

const DnDWrapper = observer((props: DnDWrapperProps) => {
  const { catalogs } = useStore();

  return (
    <div
      className="space-y-4 p-4"
      onDragEnter={ev => {
        const dragging = ev.currentTarget.querySelector(`.${classes.dragging}`);
        if (!dragging) return;

        const id = dragging.getAttribute('data-id')!;
        const afterId = getDragAfterId(ev.currentTarget as HTMLElement, ev.clientY);

        const ids = [...catalogs.currentOrder];
        ids.splice(ids.indexOf(id), 1);
        if (afterId) ids.splice(ids.indexOf(afterId), 0, id);
        else ids.push(id);

        catalogs.currentOrder = ids;
      }}
    >
      {[...new Set(catalogs.currentOrder)].map(props.render)}
    </div>
  );
});

export default DnDWrapper;
