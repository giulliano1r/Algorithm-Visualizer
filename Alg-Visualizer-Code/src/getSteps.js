import {bubbleSort, insertionSort, quickSort, selectionSort} from './algorithms'

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
  case 3:
    selectionSort(hist, steps)
    break;
  case 4:
    quickSort(hist, steps)
  default:
    break;
}

  steps.push({arr: [...hist], indexes: [] })

  console.log(steps)

  return steps
}
