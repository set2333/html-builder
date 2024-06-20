export const MAIN_BLOCK_ID = 'MAIN_BLOCK_ID';

export enum TAGS { div, span, a, h1, h2, h3, h4, h5, h6, p }

export const SETTINGS = {
  tag: {
    type: 'select',
    label: 'Tag',
    placeholder: 'Enter block tag',
    options: [
      { label: 'div', value: TAGS.div },
      { label: 'span', value: TAGS.span },
      { label: 'a', value: TAGS.a },
      { label: 'h1', value: TAGS.h1 },
      { label: 'h2', value: TAGS.h2 },
      { label: 'h3', value: TAGS.h3 },
      { label: 'h4', value: TAGS.h4 },
      { label: 'h5', value: TAGS.h5 },
      { label: 'h6', value: TAGS.h6 },
      { label: 'p', value: TAGS.p },
    ],
  },
  name: {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter block name',
  },
  innerText: {
    type: 'text',
    label: 'Text',
    placeholder: 'Enter block text',
  },
} as const;

export const STYLE_SETTINGS = {
  background: {
    type: 'text',
    label: 'Background',
    placeholder: 'Enter block background',
    unit: null,
  },
  border: {
    type: 'text',
    label: 'Border',
    placeholder: 'Enter block border',
    unit: null,
  },
  borderRadius: {
    type: 'number',
    label: 'Border radius',
    placeholder: 'Enter block border radius',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  color: {
    type: 'text',
    label: 'Color',
    placeholder: 'Enter block color',
    unit: null,
  },
  paddingTop: {
    type: 'number',
    label: 'Padding top',
    placeholder: 'Enter block padding top',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  paddingRight: {
    type: 'number',
    label: 'Padding right',
    placeholder: 'Enter block padding right',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  paddingBottom: {
    type: 'number',
    label: 'Padding bottom',
    placeholder: 'Enter block padding bottom',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  paddingLeft: {
    type: 'number',
    label: 'Padding left',
    placeholder: 'Enter block padding left',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  marginTop: {
    type: 'number',
    label: 'Margin top',
    placeholder: 'Enter block margin top',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  marginRight: {
    type: 'number',
    label: 'Margin right',
    placeholder: 'Enter block margin right',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  marginBottom: {
    type: 'number',
    label: 'Margin bottom',
    placeholder: 'Enter block margin bottom',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  marginLeft: {
    type: 'number',
    label: 'Margin left',
    placeholder: 'Enter block margin left',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  left: {
    type: 'number',
    label: 'Left',
    placeholder: 'Enter block left',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  top: {
    type: 'number',
    label: 'Top',
    placeholder: 'Enter block top',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  right: {
    type: 'number',
    label: 'Right',
    placeholder: 'Enter block right',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  bottom: {
    type: 'number',
    label: 'Bottom',
    placeholder: 'Enter block bottom',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  width: {
    type: 'number',
    label: 'Width',
    placeholder: 'Enter block width',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
  height: {
    type: 'number',
    label: 'Height',
    placeholder: 'Enter block height',
    unit: ['px', 'em','rem', 'vw', 'vh', '%'],
  },
} as const;
