# CodeBox

Code syntax highlighting tool for [Editor.js](https://editorjs.io/)

![](https://firebasestorage.googleapis.com/v0/b/bomdisoft-28c17.appspot.com/o/images%2FCodeBox.png?alt=media&token=565a0782-f684-4f7d-8430-dfd4a5bdaa11)


## Installation

### Install via NPM

```shell
npm i --save-dev @bomdi/codebox
```

Add to your module/application

```javascript
const CodeBox = require('@bomdi/codebox');
```


## Usage

Add CodeBox `tools` property of the CodeX Editor initial config.

```javascript
var editor = CodexEditor({
  ...

  tools: {
    ...
    codeBox: CodeBox,
  }

  ...
});
```

## Config Params

**All parameters are optional**

| Field              | Type     | Description                   |
| ------------------ | -------- | ------------------------------|
| themeURL           | `string` | URL pointing to CSS file that can be used by [highlight.js](https://highlightjs.org/). This could also point o your own custom CSS syntax file. If **themeURL** is provided, **themeName** and **useDefaultTheme** will be ignored |
| themeName          | `string` | Any one of the [accepted theme names](https://github.com/highlightjs/highlight.js/tree/master/src/styles) used by **highlight.js**. Only the name is required, not the full URL (example "a11y-dark"). If **themeName** is provided, **useDefaultTheme** will be ignored |
| useDefaultTheme    | `string` | **CodeBox** has 2 default themes - 1 light and 1 dark. You can specify what default should be applied by passing the string **'light'** or **'dark'** to this parameter. Note that setting **themeURL** or **themeName** overrides this setting |

If no parameters are specified, CodeBox defaults to a dark theme.

## Output data

CodeBox returns the following data

```json
{
  "type": "codeBox",
  "data": {
    "code": "consttest = newTest();.codeBoxTextArea{\n  width: 100%;\n  min-height: 30px;\n  padding: 10px;\n  border-radius: 2px 2px 2px 0;\n  border: none !important;\n  outline: none !important;\n  font: 14px monospace;\n}\n\n.codeBoxSelectDiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}",
    "language": "css"
  }
}
```


## Author

Adombang Munang Mbomndih (Bomdi)

LinkedIn: [LinkedIn](http://www.linkedin.com/in/adombangmunang)

![](https://firebasestorage.googleapis.com/v0/b/editorjs-react-renderer.appspot.com/o/Bomdi%202.jpg?alt=media&token=323c4b3e-8542-4031-9660-74280a8cfefc)
