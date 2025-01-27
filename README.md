# react-simple-wysiwyg
[![Build Status](https://travis-ci.org/megahertz/react-simple-wysiwyg.svg?branch=master)](https://travis-ci.org/megahertz/react-simple-wysiwyg)
[![NPM version](https://badge.fury.io/js/react-simple-wysiwyg.svg)](https://badge.fury.io/js/react-simple-wysiwyg)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-simple-wysiwyg.svg?color=rgb%2868%2C%20204%2C%2017%29)](https://bundlephobia.com/result?p=react-simple-wysiwyg)

Simple and lightweight React WYSIWYG editor. [Demo](https://megahertz.github.io/react-simple-wysiwyg/).

## Description

[![Screenshot](docs/resources/screenshot.png)](https://megahertz.github.io/react-simple-wysiwyg/)

It can be helpful if you only need basic text operations. It's:

 - pretty small (~8.6kb, ~3.6kb gzipped)
 - fast
 - simple to configure
 - simple to extend

Of course, it's not so powerful as other complex editors. It DOES NOT:

 - ✗ change HTML generated by a browser (sometimes it can be too dirty)
 - ✗ sanitize HTML (you can use [sanitize-html](https://www.npmjs.com/package/sanitize-html))
 - ✗ contain a lot of features as others (like table editor, image editor and so on)
 - ✗ support old browsers (IE 11 is minimal)

If you need more powerful solution for React, you'd better take a look at:

 - [draft.js](https://draftjs.org/) or draft-powered editor like
   [react-rte](https://github.com/sstur/react-rte)
 - classic solution like [CKEditor](https://ckeditor.com/) and
   [TinyMCE](https://www.tiny.cloud/)
 - [Quill](https://github.com/zenoamaro/react-quill) and
   [Summernote](https://github.com/summernote/react-summernote)


## Usage

 1. Install with [npm](https://npmjs.org/package/react-simple-wysiwyg):

    `npm install react-simple-wysiwyg`
    
    or [CDN (unpkg.com)](https://unpkg.com/react-simple-wysiwyg/)
   
    `<script src="//unpkg.com/react-simple-wysiwyg"></script>`
    
 2. Use the component
 
    ```jsx
    import React from 'react';
    import { DefaultEditor } from 'react-simple-wysiwyg';
    
    function App() {
      const [html, setHtml] = React.useState('my <b>HTML</b>');
      
      function onChange(e) {
        setHtml(e.target.value);
      }
    
      return (
        <DefaultEditor value={html} onChange={onChange} />
      );
    }
    ```
    
### Custom toolbar

```tsx
export default function Custom() {
  const [value, setValue] = React.useState('simple text');

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <EditorProvider>
      <Editor value={value} onChange={onChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}
```

Check [DefaultEditor.tsx](src/editor/DefaultEditor.tsx) for details.
  
## Credits

 - Based on 
   [lovasoa/react-contenteditable](https://github.com/lovasoa/react-contenteditable)
 - Uses [Material Design Icons](http://materialdesignicons.com/)
