import {bubbleSort, insertionSort} from './algorithms'

export function getSteps(arr, type)
{
  const hist = [...arr];
  const steps = [{arr: [...hist], indexes: []}]
  
switch (type) {
  case 1:
    bubbleSort(hist, steps)
    break;
  case 2:
    insertionSort(hist, steps)
    break;
  default:
    break;
}

  steps.push({arr: [...hist], indexes: [] })

  console.log(steps)

  return steps
}
