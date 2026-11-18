type itemProps ={
  value: number,
  index: number,
  isInclude : boolean
}

function Item({ value, index, isInclude } : itemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`flex items-end justify-center w-6 sm:w-9 pb-0.5 border-2 border-zinc-900 rounded-t text-[10px] font-mono font-semibold transition-colors duration-200
          ${isInclude ? 'bg-amber-300 text-zinc-900' : 'bg-indigo-500 text-white'}`}
        style={{height: value * 5}}
      >
        {value}
      </div>

      <span className="text-[10px] font-mono text-zinc-400">{index}</span>
    </div>
  );
}
export default Item;
