import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem('richTextContent', value);
  };

  return (
    <div>
      <h2>Rich Text Editor</h2>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
