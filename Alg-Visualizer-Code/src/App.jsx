import { useEffect, useState } from 'react';
import Item from './Item';
import { getSteps } from './getSteps';

const array = [17, 29, 4, 23, 11, 30, 8, 2, 7];

function App() {

  // gerencia o algoritimo escolhido
  const types = [
    {name: "bubbleSort", num: 1},
    {name: "insertionSort", num: 2},
  ]
  const [type, setType] = useState(1);
  
  const handleType = (n) => {
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
          onClick={() => handleType(t.num)}
          className={`px-3 m-1 py-2 bg-gray-600 text-white text-sm rounded
                      ${type !== t.num ? 'opacity-50' : 'opacity-100'}`}
          >
          <p>{t.name}</p>
        </button>
        ))}
    </div>
      

      <div className='flex flex-row items-end justify-center text-sm'>
        {arr.map((v, i) => {
          return(<Item valor={v} key={v} indice={i} index={indexes.includes(i)}></Item>)
        })}
      </div>
      <p>Passo {step} de {steps.length - 1}</p>

      <div className="flex gap-2">
        <button 
          onClick={() => setIsRunning(r => !r)} 
          className='bg-green-400 w-15 rounded text-sm hover:bg-green-500 text-white'
        >
           Play 
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
