import create from 'zustand';

export interface FetchCraftData {
  id_information: number;
  image_information: string;
  title_information: string;
  description_information: string;
  link_video: string;
  step_information: string;
  coin_information: number;
  tools_materials: string;
}
export type CategoryType = {
  title: string;
  desc: string;
  progress: number;
  item: number;
  date: Date;
  img: string;
  reward: number;
};

export interface CraftSelection {
  id: number;
  img: string;
  title: string;
  desc: string;
  video: string;
  step: Step[];
  coin: number;
  tools: Tools[];
}

type CraftStore = {
  crafts: CraftSelection[];
  setCrafts(data: FetchCraftData[]): void;
  updateCraftsTodo(craftId: number, stepId: number, status: boolean): void;
  updateCraftsTools(craftId: number, toolId: number, status: boolean): void;
};

type Tools = {
  id: number;
  title: string;
  qty: string;
  done: boolean;
};

export type Step = {
  id: number;
  done: boolean;
  step: string;
};

/**
 * FORMAT DATA
 */
const makeTools = (data: string) => {
  const stringData = data.replace(/[{}"]/g, '').split(', ');
  let newData: Tools[] = [];
  let k = 0;
  for (let i = 1; i < stringData.length / 2; i += 2) {
    newData = [
      ...newData,
      {
        id: k,
        title: stringData[i - 1],
        qty: stringData[i],
        done: false,
      },
    ];
    k++;
  }
  return newData;
};

const makeStep = (data: string): Step[] => {
  return data.split('. ').map((item, i) => ({
    id: i,
    done: false,
    step: item,
  }));
};

const formatInstructions = (data: FetchCraftData[]): CraftSelection[] => {
  const newData: CraftSelection[] = data.map((item) => ({
    id: Number(item.id_information),
    coin: Number(item.coin_information),
    img: item.image_information,
    title: item.title_information,
    desc: item.description_information,
    video: item.link_video,
    step: makeStep(item.step_information),
    tools: makeTools(item.tools_materials),
  }));
  return newData;
};

/**
 * UPDATE TODO STEPS
 */
const updateTodoStep = (
  steps: Step[],
  stepId: number,
  status: boolean
): Step[] =>
  steps.map((step: Step) => ({
    ...step,
    done: step.id === stepId ? !status : step.done,
  }));

const updateTodo = (
  crafts: CraftSelection[],
  craftId: number,
  stepId: number,
  status: boolean
) =>
  crafts.map((craft) => ({
    ...craft,
    step:
      craft.id === craftId
        ? updateTodoStep(craft.step, stepId, status)
        : craft.step,
  }));

/**
 * UPDATE Tools STEPS
 */
const updateToolsStep = (
  tools: Tools[],
  toolId: number,
  status: boolean
): Tools[] =>
  tools.map((tool: Tools) => ({
    ...tool,
    done: tool.id === toolId ? !status : tool.done,
  }));

const updateTools = (
  crafts: CraftSelection[],
  craftId: number,
  toolId: number,
  status: boolean
) =>
  crafts.map((craft) => ({
    ...craft,
    tools:
      craft.id === craftId
        ? updateToolsStep(craft.tools, toolId, status)
        : craft.tools,
  }));

const useCraft = create<CraftStore>((set) => ({
  crafts: [],
  setCrafts(data: FetchCraftData[]) {
    set((state) => ({
      ...state,
      crafts: formatInstructions(data),
    }));
  },
  updateCraftsTodo(craftId, stepId, status) {
    set((state) => ({
      ...state,
      crafts: updateTodo(state.crafts, craftId, stepId, status),
    }));
  },
  updateCraftsTools(craftId, toolId, status) {
    set((state) => ({
      ...state,
      crafts: updateTools(state.crafts, craftId, toolId, status),
    }));
  },
}));

export default useCraft;
