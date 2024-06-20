import { FC, PropsWithChildren } from "react";
import { TAGS } from "../consts";

export const useComponentsMap = (): Record<TAGS, FC<PropsWithChildren<{
  id: string;
  style: object;
}>>> => {
  return {
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
}