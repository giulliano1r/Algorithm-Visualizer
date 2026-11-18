import {bubbleSort, insertionSort, quickSort, selectionSort} from './algorithms'
import type {Step, Algorithm} from './types'

export function getSteps(arr: number[], type: string)
{
  const hist = [...arr];
  const steps: Step[] = [{arr: [...hist], indexes: []}]
  
switch (type) {
  case "bubble":
    bubbleSort(hist, steps)
    break;
  case "insertion":
    insertionSort(hist, steps)
    break;
  case "selection":
    selectionSort(hist, steps)
    break;
  case "quick":
    quickSort(hist, steps)
    break;
  default:
    break;
}

  steps.push({arr: [...hist], indexes: [] })

  console.log(steps)

  return steps
}
