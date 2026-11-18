import type {Step} from './types'

export function bubbleSort(arr: number[], steps: Step[]) : void
{
  for(let i = 0; i < arr.length - 1; i++)
  {
    for(let j = 0; j < arr.length - 1; j++)
    {
      steps.push({arr: [...arr], indexes: [j, j+1]})
      if(arr[j] > arr[j + 1])
      {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        steps.push({arr: [...arr], indexes: [j, j+1]})
      }
    }
  }
}

export function insertionSort(arr: number[], steps: Step[]) : void
{
  for(let i = 1; i < arr.length; i++)
  {
    let j = i;

    while (j > 0)
    {
      steps.push({arr: [...arr], indexes: [j - 1, j]});

      if(arr[j - 1] > arr[j])
      {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]; // swap
        steps.push({arr: [...arr], indexes: [j - 1, j]});
        j--;
      }
      else
        break;
    }
  }
}

export function selectionSort(arr: number[], steps: Step[]) : void
{
  for(let i = 0; i < arr.length - 1; i++)
  {
    let min = i;

    for(let j = i + 1; j < arr.length; j++)
    {
      steps.push({arr: [...arr], indexes: [min, j]});
      if (arr[j] < arr[min])
        min = j;
    }

    if(min !== i)
    {
      [arr[i], arr[min]] = [arr[min], arr[i]]; // swap
      steps.push({arr: [...arr], indexes: [i, min]});
    }
  }
}

export function quickSort(arr: number[], steps: Step[], low = 0, high = arr.length - 1) : void
{
  if(low >= high) return;

  const p = partition(arr, steps, low, high);
  quickSort(arr, steps, low, p - 1);   // ordena a esquerda do pivo
  quickSort(arr, steps, p + 1, high);  // ordena a direita do pivo
}

function partition(arr: number[], steps: Step[], low: number, high: number) : number
{
  const pivot = arr[high];
  let i = low;

  for(let j = low; j < high; j++)
  {
    steps.push({arr: [...arr], indexes: [j, high]});

    if(arr[j] < pivot)
    {
      if(i !== j)
      {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push({arr: [...arr], indexes: [i, j]});
      }
      i++;
    }
  }

  if(i !== high)
  {
    [arr[i], arr[high]] = [arr[high], arr[i]];
    steps.push({arr: [...arr], indexes: [i, high]});
  }

  return i;
}
