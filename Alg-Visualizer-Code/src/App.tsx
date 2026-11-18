import { useEffect, useState } from 'react';
import Item from './Item';
import { getSteps } from './getSteps';
import { Algorithm, AlgorithmButton } from './types';

const array = [17, 29, 4, 23, 11, 30, 8, 2, 7];

function App() {

  // gerencia o algoritimo escolhido

  const [type, setType] = useState<Algorithm>("bubble");
  
  const types: AlgorithmButton[] = [
  { id: "bubble", name: "Bubble Sort" },
  { id: "insertion", name: "Insertion Sort" },
  { id: "selection", name: "Selection Sort" },
  { id: "quick", name: "Quick Sort" },
  ];

  const handleType = (n : Algorithm) => {
    SetStep(0);
    setType(n);
  }

  // gerencia o estado do algoritimo escolhido
  const steps = getSteps(array, type)
  
  const [step, SetStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  let end = step === steps.length - 1;

  useEffect(() => {
    if(!isRunning || end) return;

    const timer = setInterval(() => SetStep((p) => p + 1), 1000);
    return () => clearTimeout(timer);
  }, [isRunning, step, end])

  const {arr, indexes} = steps[step];

  return (
    <div className='flex justify-center items-center flex-col gap-5 h-screen overflow-hidden px-4 bg-stone-100 text-zinc-900'>

    {/* top buttons */}
    <div className='flex flex-wrap justify-center gap-1.5'>
      {types.map((t) => (
        <button 
          onClick={() => handleType(t.id)}
          className={`px-3 py-1.5 text-xs font-semibold border-2 border-zinc-900 rounded-md transition-colors
                      ${type !== t.id ? 'bg-white hover:bg-stone-200' : 'bg-zinc-900 text-white'}`}
          >
          <p>{t.name}</p>
        </button>
        ))}
    </div>
      

      <div className='flex flex-row items-end justify-center gap-1 sm:gap-1.5 h-56 px-4 sm:px-6 pt-5 pb-2 bg-white border-2 border-zinc-900 rounded-lg shadow-[4px_4px_0_0_#18181b] text-sm'>
        {arr.map((v, i) => {
          return(<Item value={v} key={v} index={i} isInclude={indexes.includes(i)}></Item>)
        })}
      </div>
      <p className='text-xs font-mono font-semibold text-zinc-500 tabular-nums'>Passo {step} de {steps.length - 1}</p>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setIsRunning(r => !r)}
          className={`w-20 py-1.5 text-xs font-semibold text-white border-2 border-zinc-900 rounded-md shadow-[2px_2px_0_0_#18181b] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
            ${isRunning ? 'bg-red-500' : 'bg-indigo-600'}`}
        >
          {isRunning ? 'Pausar' : 'Play'}
        </button>

        <button
          className="px-3 py-1.5 text-xs font-semibold bg-white border-2 border-zinc-900 rounded-md shadow-[2px_2px_0_0_#18181b] transition-all hover:bg-stone-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-40 disabled:shadow-none disabled:hover:bg-white"
          onClick={() => SetStep(p => p - 1)}
          disabled={isRunning || step === 0}
        >
          Anterior
        </button>

        <button
          className="px-3 py-1.5 text-xs font-semibold bg-white border-2 border-zinc-900 rounded-md shadow-[2px_2px_0_0_#18181b] transition-all hover:bg-stone-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-40 disabled:shadow-none disabled:hover:bg-white"
          onClick={() => SetStep(p => p + 1)}
          disabled={isRunning || end}
        >
          Próximo
        </button>

        <button
          className="px-3 py-1.5 text-xs font-semibold bg-white border-2 border-zinc-900 rounded-md shadow-[2px_2px_0_0_#18181b] transition-all hover:bg-stone-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          onClick={() => { setIsRunning(false); SetStep(0); }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}

export default App
