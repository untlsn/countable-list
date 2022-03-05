interface ShowProps {
  children: any,
  when: any,
  fallback?: any
}

const Show = (props: ShowProps) => props.when
  ? props.children
  : props.fallback || <></>;


export default Show;
