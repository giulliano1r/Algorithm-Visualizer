function Item({ valor, indice, index }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-end m-[0.5px] justify-center w-12 sm:w-20 sm:h-32 text-white text-sm rounded transition-all
          ${index ? 'bg-amber-500' : 'bg-gray-700'}`}
        style={{height: valor * 7}}
      >
        {valor}
      </div>

      <span className="mt-2">{indice}</span>
    </div>
  );
}
export default Item;
