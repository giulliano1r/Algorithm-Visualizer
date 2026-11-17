export function bubbleSort(arr, steps)
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

export function insertionSort(arr, steps)
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
