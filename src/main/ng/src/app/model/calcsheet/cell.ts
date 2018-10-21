export interface Cell {
  value: number | string;
  references: number;
  subscribe(next?: (x: number) => void, error?: (error: any) => void, complete?: () => void);
}

export type ProviderByArray = (cells: Cell[]) => number;

export type ProviderByArgs = (cell: Cell) => number;
