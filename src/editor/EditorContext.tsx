import * as React from 'react';

export const EditorContext = React.createContext<EditorState>(null);

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<EditorState>({
    htmlMode: false,
    update,
  });

  function update(attrs) {
    setState((prevState) => {
      return {
        ...prevState,
        ...attrs,
        date: Date.now(),
      };
    });
  }

  return (
    <EditorContext.Provider value={state}>{children}</EditorContext.Provider>
  );
}

export function useEditorState(): EditorState {
  const context = React.useContext(EditorContext);
  if (!context) {
    throw new Error('You should wrap your component by EditorProvider');
  }

  return context;
}

export interface EditorState {
  update(attrs: Partial<EditorState>): void;
  $el?: HTMLElement;
  $selection?: Node;
  htmlMode: boolean;
}
