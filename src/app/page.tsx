'use client';

import { useEffect } from 'react';
import { editor } from 'monaco-editor';
import Editor, { loader } from '@monaco-editor/react';
import Loading from './loading';

// Shadcn UI
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const options: editor.IEditorOptions = {
  readOnly: false,
  minimap: { enabled: false },
};

export default function Home() {
  const minSize = 30;

  useEffect(() => {
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
  }, []);

  return (
    <main className="flex min-h-screen">
      <div className="flex-1 p-2"></div>
      <div className="flex-1 dark flex flex-col">
        <div className="bg-background">
          <Tabs defaultValue="view" className="w-fit p-2">
            <TabsList className="grid w-full grid-cols-3 font-medium">
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="view">View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Editor
          defaultLanguage="css"
          theme="custom"
          options={options}
          height="100%"
          width="100%"
          loading={<Loading />}
        />
      </div>
    </main>
  );
}
