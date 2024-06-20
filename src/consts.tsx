import { FC, PropsWithChildren } from "react";

export const MAIN_BLOCK_ID = 'MAIN_BLOCK_ID';

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

export enum TAGS { div, span, a, h1, h2, h3, h4, h5, h6, p }

export const ComponentMap: Record<TAGS, FC<PropsWithChildren<{
  id: string;
   style: object;
}>>> = {
  [TAGS.div]: ({ children, ...props}) => <div {...props}>{children}</div>,
  [TAGS.span]: ({ children, ...props}) => <span {...props}>{children}</span>,
  [TAGS.a]: ({ children, ...props}) => <a {...props}>{children}</a>,
  [TAGS.h1]: ({ children, ...props}) => <h1 {...props}>{children}</h1>,
  [TAGS.h2]: ({ children, ...props}) => <h2 {...props}>{children}</h2>,
  [TAGS.h3]: ({ children, ...props}) => <h3 {...props}>{children}</h3>,
  [TAGS.h4]: ({ children, ...props}) => <h4 {...props}>{children}</h4>,
  [TAGS.h5]: ({ children, ...props}) => <h5 {...props}>{children}</h5>,
  [TAGS.h6]: ({ children, ...props}) => <h6 {...props}>{children}</h6>,
  [TAGS.p]: ({ children, ...props}) => <p {...props}>{children}</p>,
};