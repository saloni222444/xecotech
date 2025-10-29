const HTMLToJSX = require('htmltojsx');
const converter = new HTMLToJSX({ createClass: false });

const html = `<section class="hero"><h1>Hello</h1></section>`; // yaha apna bada HTML daal do
const jsx = converter.convert(html);

console.log(jsx);
