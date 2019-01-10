import Converter from './dist/Converter';
const rootElement = document.getElementById('rootElement');
var conv = new Converter(rootElement, 1.14, 0.87);
conv.render();