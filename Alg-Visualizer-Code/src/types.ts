export type Step = {
    arr: number[],
    indexes: number[]
}

export type Algorithm = "bubble" | "insertion" | "selection" | "quick";

export type AlgorithmButton = {
  id: Algorithm;
  name: string;
};
