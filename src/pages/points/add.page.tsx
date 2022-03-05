import TextField from '~/components/atoms/TextField';
import Switch from '~/components/atoms/Switch';
import Button from '~/components/atoms/Button';
import { useForm } from 'react-hook-form';
import uuid from '~/helpers/uuid';
import store from '~/store';
import { navigate } from 'vite-plugin-ssr/client/router';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';

interface AddPointFormFields {
  name: string
  countable: boolean
  maxCount?: number
  color: string
}

const Add = observer(() => {
  const { register, handleSubmit, watch, setValue } = useForm<AddPointFormFields>();

  const submit = handleSubmit(({ countable, ...spread }) => {
    const id = uuid();
    store.newPoint = {
      id,
      ...spread,
      maxCount: countable ? spread.maxCount! : 1,
      curCount: 0,
    };
    navigate('/');
  });

  useEffect(() => {
    if (!watch('countable')) setValue('maxCount', undefined);
  }, [watch('countable')]);

  return (
    <div class="bg-gray-200 min-h-page py-8">
      <div class="bg-white w-180 m-auto p-4 rounded-xl shadow space-y-4">
        <TextField placeholder="Point name" spread={{ ...register('name'), tabIndex: 1 }} />
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
            spread={{
              ...register('maxCount', { valueAsNumber: true }),
              disabled: !watch('countable'),
              tabIndex: 3,
            }}
          />
        </div>
        <label class="flex items-center">
          <button>Pick color</button>
          <input
            type="color"
            value="#ffffff"
            onChange={(ev) => setValue('color', ev.currentTarget.value)}
          />
        </label>
        <div class="text-right">
          <Button onClick={submit as any} tabIndex={4}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Add;