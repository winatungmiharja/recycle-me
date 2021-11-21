import create from 'zustand';

export type CategoryType = {
  id: number;
  title: string;
  desc: string;
  progress: number;
  item: number;
  date: string;
  img: string;
  trash: HistoryType[];
  preview: string;
  reward: number;
};

export type HistoryType = {
  id?: number;
  title: string;
  category: string;
  date: string;
  img: string;
};

const trashCategory: CategoryType[] = [
  {
    id: 0,
    title: 'Cardboard',
    desc: 'Lorem ipsum',
    progress: 82,
    item: 0,
    date: ' ',
    img: '/images/trash-01.svg',
    trash: [],
    preview: '/images/preview-01.svg',
    reward: 60,
  },
  {
    id: 1,
    title: 'Glass',
    desc: 'Lorem ipsum',
    progress: 28,
    item: 0,
    date: ' ',
    img: '/images/trash-05.svg',
    trash: [],
    preview: '/images/preview-02.svg',
    reward: 70,
  },
  {
    id: 2,
    title: 'Metal',
    desc: 'Lorem ipsum',
    progress: 36,
    item: 0,
    date: ' ',
    img: '/images/trash-06.svg',
    trash: [],
    preview: '/images/preview-03.svg',
    reward: 100,
  },
  {
    id: 3,
    title: 'Paper',
    desc: 'Lorem ipsum',
    progress: 94,
    item: 0,
    date: ' ',
    img: '/images/trash-01.svg',
    trash: [],
    preview: '/images/preview-04.svg',
    reward: 50,
  },
  {
    id: 4,
    title: 'Plastic',
    desc: 'Lorem ipsum',
    progress: 66,
    item: 0,
    date: ' ',
    img: '/images/trash-02.svg',
    trash: [],
    preview: '/images/preview-05.svg',
    reward: 80,
  },
  {
    id: 5,
    title: 'Trash',
    desc: 'Lorem ipsum',
    progress: 16,
    item: 0,
    date: ' ',
    img: '/images/trash-04.svg',
    trash: [],
    preview: '/images/preview-06.svg',
    reward: 120,
  },
];

const updateTrashCategory = (
  trashes: CategoryType[],
  categoryId: number,
  newItem: HistoryType
): CategoryType[] =>
  trashes.map((trashItem) => ({
    ...trashItem,
    item:
      trashItem.trash.length === 0
        ? trashItem.trash.length + 1
        : trashItem.trash.length,
    trash:
      trashItem.id === categoryId
        ? [...trashItem.trash, { ...newItem, id: trashItem.trash.length }]
        : trashItem.trash,
  }));

const updateTrashHistory = (
  history: HistoryType[],
  newItem: HistoryType
): HistoryType[] => [...history, { ...newItem, id: history.length }];

type TrashStore = {
  trash: CategoryType[];
  history: HistoryType[];
  update: (categoryId: number, item: HistoryType) => void;
};

const useTrash = create<TrashStore>((set) => ({
  trash: trashCategory,
  history: [],
  update(categoryId, item) {
    set((state) => ({
      ...state,
      trash: updateTrashCategory(state.trash, categoryId, item),
      history: updateTrashHistory(state.history, item),
    }));
  },
}));

export default useTrash;
