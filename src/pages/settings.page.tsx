import TextField from '~/components/atoms/TextField';
import { observer } from 'mobx-react-lite';
import Button from '~/components/atoms/Button';
import { useForm } from 'react-hook-form';
import { useStore } from '~/store/hooks';

const SettingsPage = observer(() => {
  const store = useStore();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      ...store.settings.defaults,
    },
  });
  const submit = handleSubmit(values => {
    store.settings.defaults.set(values);
  }) as any;

  return (
    <div className="p-8">
      <form onSubmit={submit}>
        <h1 className="text-2xl">Defaults</h1>
        <ul className="p-4">
          <li>
            <p>Color:</p>
            <input type="color" {...register('color')} />
          </li>
          <li>
            <p>Catalog:</p>
            <TextField class="w-1/4" {...register('catalog')} />
          </li>
        </ul>
        <div className="text-right">
          <Button>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
});

export default SettingsPage;
