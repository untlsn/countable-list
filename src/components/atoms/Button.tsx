import { JSX } from 'preact';

const Button = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      class={`bg-main-orange text-white px-2 py-1 rounded-full font-semibold hover:opacity-70 ${props.class || ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
