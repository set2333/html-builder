import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { MAIN_BLOCK_ID, TAGS } from "./consts";

const findBlocksForDelete = (id, blocks) => {
  const blocksForDelete = current(blocks).find((block) => block.id === id);
  const childBlocks = current(blocks).filter((block) => block.parentId === id);

  return [
    blocksForDelete,
    ...childBlocks.reduce(
      (acc, block) => [...acc, ...findBlocksForDelete(block.id, blocks)],
      []
    ),
  ];
};

const usedStyleSettingsSlice = createSlice({
  name: 'usedStyleSettings',
  initialState: ['background', 'display', 'width', 'height'],
  reducers: {
    addSettings: (state, action) => {
      state.push(action.payload);
    },
    removeSettings: (state, action) => {
      return state.filter(setting => setting!== action.payload);
    }
  },
});

const blocksSlice = createSlice({
  name: "blocks",
  initialState: [
    {
      id: MAIN_BLOCK_ID,
      parentId: "",
      name: "",
      tag: TAGS.div,
      style: { width: "100vw", height: "100vh", top: "0", left: "0" },
      innerText: "",
    },
  ],
  reducers: {
    addBlock: (state, action) => {
      state.push(action.payload);
    },
    changeBlock: (state, action) => {
      const index = state.findIndex((block) => block.id === action.payload.id);

      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeBlock: (state, action) => {
      const blocksForDelete = findBlocksForDelete(action.payload.id, state);

      return state.filter(
        (block) =>
          !blocksForDelete.some(
            (blockForDelete) => blockForDelete.id === block.id
          )
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    blocks: blocksSlice.reducer,
    usedStyleSettings: usedStyleSettingsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const ACTIONS = {
  ...blocksSlice.actions,
  ...usedStyleSettingsSlice.actions,
};
