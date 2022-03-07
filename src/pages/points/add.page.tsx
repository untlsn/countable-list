import TextField from '~/components/atoms/TextField';
import Switch from '~/components/atoms/Switch';
import Button from '~/components/atoms/Button';
import { useForm } from 'react-hook-form';
import store from '~/store';
import { navigate } from 'vite-plugin-ssr/client/router';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';

interface AddPointFormFields {
  name: string
  countable: boolean
  maxCount?: number
  color: string
  catalog?: string
}

const Add = observer(() => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<AddPointFormFields>();


  const submit = handleSubmit(({ countable, ...spread }) => {
    store.newPoint = {
      ...spread,
      catalog: spread.catalog || 'default',
      maxCount: countable ? spread.maxCount! : 1,
    };
    navigate('/');
  });

  useEffect(() => {
    if (!watch('countable')) setValue('maxCount', undefined);
  }, [watch('countable')]);

  return (
    <div class="bg-gray-200 min-h-page py-8">
      <form onSubmit={submit as any} class="bg-white w-180 m-auto p-4 rounded-xl shadow space-y-4">
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
        <div class={watch('countable') ? '' : 'opacity-50'}>
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
          defaultValue="default"
          {...register('catalog')}
        />
        <label class="flex items-center">
          <button>Pick color</button>
          <input
            type="color"
            value="#ffffff"
            onChange={(ev) => setValue('color', ev.currentTarget.value)}
          />
        </label>
        <div class="text-right">
          <Button tabIndex={4}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
});

export default Add;
