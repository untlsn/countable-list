interface DifferenceBarProps {
  curCount: number
  maxCount: number
}

const DifferenceBar = (props: DifferenceBarProps) => {
  return (
    <div className="flex items-center gap-1">
      {props.curCount}
      <div className="w-2 h-5 border-1 relative">
        <hr
          className="border-none absolute inset-0 w-full h-full origin-bottom bg-main-blue"
          style={{ 'transform': `scaleY(${props.curCount ? props.curCount / props.maxCount : 0})` }}
        />
      </div>
      {props.maxCount}
    </div>
  );
};

export default DifferenceBar;
