import './style.css';
import { JSX } from 'preact';
import Show from '~/providers/Show';
import { forwardRef } from 'preact/compat';

export interface TextFieldProps extends JSX.HTMLAttributes<HTMLInputElement> {
  error?: string;
  defaultValue?: string
}

const getForInput = (props: TextFieldProps) => {
  const { class: _class, placeholder, error, defaultValue, ...forInput } = props;
  return forInput;
};

const TextField = forwardRef((props: TextFieldProps, ref) => {
  props.ref = ref as any;
  return (
    <div class={props.class}>
      <label
        class='bg-white flex items-center px-4 gap-4 border-1 rounded border-gray-500 hover:border-blue-600 focus-within:border-blue-600 relative'
        tabIndex={-1}
      >
        <input
          {...getForInput(props)}
          placeholder={props.defaultValue || ' '}
          class="w-full rounded h-10 bg-transparent focus:outline-none input-placeholder-move"
        />
        <div
          class={`absolute text-gray-500 transform transition-transform ${props.defaultValue ? 'transform -translate-y-[86%] scale-90' : ''}
          before before:(absolute bg-white w-[110%] h-[3px] -left-[5%] top-0 bottom-0 mx-0 my-auto -z-1)`}
        >
          {props.placeholder}
        </div>
      </label>
      {<Show when={props.error}>{<small class="block text-red-600 pl-4">{props.error}</small>}</Show>}
    </div>
  );
});

export default TextField;
