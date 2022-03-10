import TextField from '~/components/atoms/TextField';
import Switch from '~/components/atoms/Switch';
import Button from '~/components/atoms/Button';
import { useForm } from 'react-hook-form';
import { navigate } from 'vite-plugin-ssr/client/router';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { useStore } from '~/store/hooks';

interface AddPointFormFields {
  name: string
  countable: boolean
  maxCount?: number
  color?: string
  catalog?: string
}

const Add = observer(() => {
  const store = useStore();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<AddPointFormFields>();


  const submit = handleSubmit(({ countable, ...spread }) => {
    store.points.add({
      ...store.settings.defaults,
      ...spread,
      catalog: spread.catalog ? spread.catalog : store.settings.defaults.catalog,
      maxCount: countable ? spread.maxCount! : 1,
    });
    navigate('/');
  });

  useEffect(() => {
    if (!watch('countable')) setValue('maxCount', undefined);
  }, [watch('countable')]);

  return (
    <div className="min-h-page py-8">
      <form onSubmit={submit as any} className="bg-white w-180 m-auto p-4 rounded-xl shadow space-y-4">
        <TextField
          placeholder="Point name"
          tabIndex={1}
          {...register('name', { required: 'Point name are required' })}
          error={errors.name?.message}
        />
        <Switch
          onCheck={(checked) => setValue('countable', checked)}
          checked={!!watch('countable')}
          tabIndex={2}
        >
          countable
        </Switch>
        <div className={watch('countable') ? '' : 'opacity-50'}>
          <TextField
            placeholder="Count"
            type="number"
            disabled={!watch('countable')}
            tabIndex={3}
            {...register('maxCount', { valueAsNumber: true })}
          />
        </div>
        <TextField
          placeholder="Catalog"
          tabIndex={4}
          defaulty={store.settings.defaults.catalog}
          {...register('catalog')}
        />
        <label className="flex items-center">
          <button>Pick color</button>
          <input
            type="color"
            value={store.settings.defaults.color}
            onChange={(ev) => setValue('color', ev.currentTarget.value)}
          />
        </label>
        <div className="text-right">
          <Button tabIndex={4}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
});

export default Add;
