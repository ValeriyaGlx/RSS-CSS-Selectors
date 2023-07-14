import * as CodeMirror from 'codemirror';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/lib/codemirror.css';

function render(): void {
  const myEditor: CodeMirror.Editor = CodeMirror.fromTextArea(
    document.getElementById('html-editor') as HTMLTextAreaElement,
    {
      lineNumbers: false,
      readOnly: 'nocursor',
      matchBrackets: true,
    },
  );
  function renderResult(): void {
    const htmlContent = myEditor.getValue();
    (document.getElementById('resultBlock') as HTMLElement).innerHTML = htmlContent;
  }
  renderResult();
}

export default function addCodeMirrorInterface(): void {
  if (!document.getElementById('html-editor')) {
    document.addEventListener('DOMContentLoaded', () => {
      render();
    });
  } else {
    render();
  }
}
