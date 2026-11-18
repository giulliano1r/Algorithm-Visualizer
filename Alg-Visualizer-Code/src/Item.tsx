type itemProps ={
  value: number,
  index: number,
  isInclude : boolean
}

function Item({ value, index, isInclude} : itemProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-end m-[0.5px] justify-center w-12 sm:w-20 sm:h-32 text-white text-sm rounded transition-all
          ${isInclude ? 'bg-amber-500' : 'bg-gray-700'}`}
        style={{height: value * 7}}
      >
        {value}
      </div>

      <span className="mt-2">{index}</span>
    </div>
  );
}
export default Item;
