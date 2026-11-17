import { useEffect, useState } from 'react';
import Item from './Item';
import {bubbleSort} from './Algorithms'

const array = [17, 29, 4, 23, 11, 30, 8, 2, 7];

function getSteps(arr)
{
  const hist = [...arr];
  const steps = [{arr: [...hist], indexes: []}]
  
  bubbleSort(hist, steps)
  steps.push({arr: [...hist], indexes: [] })

  console.log(steps)

  return steps
}

function App() {

  // gerencia a atualizacao de estados
  const steps = getSteps(array);

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
