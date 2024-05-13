'use client';

import React from 'react';
import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';

const options: editor.IEditorOptions = {
  readOnly: false,
  minimap: { enabled: false },
};

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex-1 bg-gray-200">Left Content</div>
      <div className="flex-1">
        <Editor defaultLanguage="css" theme="vs-dark" options={options} />
      </div>
    </main>
  );
}
