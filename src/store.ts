import create from 'zustand';

export interface TreeSelection {
  id: number;
  base: string;
  tree: number;
}

const userTreeSelection: TreeSelection[] = [
  {
    id: 0,
    base: 'default',
    tree: 0,
  },
  {
    id: 1,
    base: 'default',
    tree: 0,
  },
  {
    id: 2,
    base: 'default',
    tree: 0,
  },
  {
    id: 3,
    base: 'default',
    tree: 0,
  },
  {
    id: 4,
    base: 'default',
    tree: 0,
  },
  {
    id: 5,
    base: 'default',
    tree: 0,
  },
  {
    id: 6,
    base: 'default',
    tree: 0,
  },
  {
    id: 7,
    base: 'default',
    tree: 0,
  },
  {
    id: 8,
    base: 'default',
    tree: 0,
  },
];

const updateTree = (
  trees: TreeSelection[],
  item: TreeSelection
): TreeSelection[] =>
  trees.map((treeItem) => ({
    ...treeItem,
    base: treeItem.id === item.id ? item.base : treeItem.base,
    tree: treeItem.id === item.id ? item.tree : treeItem.tree,
  }));

type Store = {
  selectedTree: number;
  trees: TreeSelection[];
  setSelectedTree: (id: number) => void;
  update: (item: TreeSelection) => void;
};

const useTree = create<Store>((set) => ({
  trees: userTreeSelection,
  selectedTree: 4,
  setSelectedTree(id: number) {
    set((state) => ({
      ...state,
      selectedTree: id,
    }));
  },
  update(item: TreeSelection) {
    set((state) => ({
      ...state,
      trees: updateTree(state.trees, item),
    }));
  },
}));

export default useTree;
