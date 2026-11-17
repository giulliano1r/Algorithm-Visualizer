export function bubbleSort(arr, steps)
{
  for(let i = 0; i < arr.length - 1; i++)
  {
    for(let j = 0; j < arr.length - 1; j++)
    {
      steps.push({arr: [...arr], indexes: [j, j+1] })
      if(arr[j] > arr[j + 1])
      {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        steps.push({arr: [...arr], indexes: [j, j+1] })
      }
    }
  }
}
