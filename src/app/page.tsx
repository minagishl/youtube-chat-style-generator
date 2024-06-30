'use client';

import { useEffect, useState } from 'react';
import { editor } from 'monaco-editor';
import Editor, { loader } from '@monaco-editor/react';
import Loading from './loading';

// Shadcn UI
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const options: editor.IEditorOptions = {
  readOnly: false,
  minimap: { enabled: false },
};

export default function Home() {
  const [selectValue, setSelectValue] = useState<string>('view');
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [cssContent, setCssContent] = useState<string>('');

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
      <div className="flex-1 dark flex flex-col h-screen">
        <div className="bg-background flex flex-col h-full">
          <Tabs defaultValue="view" className="w-full p-2 h-full flex flex-col">
            <TabsList className="grid w-fit grid-cols-3 font-medium">
              <TabsTrigger value="html" onClick={() => setSelectValue('html')}>
                HTML
              </TabsTrigger>
              <TabsTrigger value="css" onClick={() => setSelectValue('css')}>
                CSS
              </TabsTrigger>
              <TabsTrigger value="view" onClick={() => setSelectValue('view')}>
                View
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="html"
              className="flex-1 flex"
              style={{
                display: selectValue === 'html' ? 'block' : 'none',
              }}
            >
              <Editor
                defaultLanguage="html"
                theme="custom"
                options={options}
                height="100%"
                width="100%"
                loading={<Loading />}
                onChange={(value) => setHtmlContent(value || '')}
              />
            </TabsContent>

            <TabsContent
              value="css"
              className="flex-1 flex"
              style={{
                display: selectValue === 'css' ? 'block' : 'none',
              }}
            >
              <Editor
                defaultLanguage="css"
                theme="custom"
                options={options}
                height="100%"
                width="100%"
                loading={<Loading />}
                onChange={(value) => setCssContent(value || '')}
              />
            </TabsContent>

            <TabsContent
              value="view"
              className="flex-1 flex"
              style={{
                display: selectValue === 'view' ? 'block' : 'none',
              }}
            >
              <div
                className="preview flex-1"
                style={{ padding: '16px', background: '#fff', color: '#000' }}
                dangerouslySetInnerHTML={{
                  __html: `<style>${cssContent}</style>${htmlContent}`,
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
