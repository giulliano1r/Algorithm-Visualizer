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
    <div className='flex justify-center items-center flex-col h-screen '>

    {/* top buttons */}
    <div className='flex'>
      {types.map((t) => (
        <button 
          onClick={() => handleType(t.id)}
          className={`px-3 m-1 py-2 bg-gray-600 text-white text-sm rounded
                      ${type !== t.id ? 'opacity-50' : 'opacity-100'}`}
          >
          <p>{t.name}</p>
        </button>
        ))}
    </div>
      

      <div className='flex flex-row items-end justify-center text-sm'>
        {arr.map((v, i) => {
          return(<Item value={v} key={v} index={i} isInclude={indexes.includes(i)}></Item>)
        })}
      </div>
      <p>Passo {step} de {steps.length - 1}</p>

      <div className="flex gap-2">
        <button
          onClick={() => setIsRunning(r => !r)}
          className={`px-4 py-2 text-white rounded
            ${isRunning ? 'bg-red-600' : 'bg-green-600'}`}
        >
          {isRunning ? 'Pausar' : 'Play'}
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
          onClick={() => SetStep(p => p - 1)}
          disabled={isRunning || step === 0}
        >
          Anterior
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
          onClick={() => SetStep(p => p + 1)}
          disabled={isRunning || end}
        >
          Próximo
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => { setIsRunning(false); SetStep(0); }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}

export default App
