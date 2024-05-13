'use client';

import { editor } from 'monaco-editor';
import Editor, { loader } from '@monaco-editor/react';

// Shadcn UI
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const options: editor.IEditorOptions = {
  readOnly: false,
  minimap: { enabled: false },
};

export default function Home() {
  loader.init().then((monaco) => {
    monaco.editor.defineTheme('custom', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#09090B',
      },
    });
  });

  return (
    <main className="flex min-h-screen">
      <div className="flex-1 bg-gray-200">Left Content</div>
      <div className="flex-1 dark flex flex-col">
        <div className="bg-background">
          <Tabs defaultValue="css" className="w-fit p-2">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="css">index.css</TabsTrigger>
              <TabsTrigger value="view">view</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Editor
          defaultLanguage="css"
          theme="custom"
          options={options}
          height="100dvh"
          width="100%"
        />
      </div>
    </main>
  );
}
