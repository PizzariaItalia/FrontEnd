"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Carditens;
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_module_css_1 = __importDefault(require("./Card.module.css"));
function Carditens({ nome, img, des, valor }) {
    return (
    //Separação de um Produto, com titulo descrição valor e imagem
    (0, jsx_runtime_1.jsxs)("a", { href: "", className: Card_module_css_1.default.card, children: [(0, jsx_runtime_1.jsxs)("div", { className: Card_module_css_1.default.info, children: [(0, jsx_runtime_1.jsx)("h1", { children: nome }), (0, jsx_runtime_1.jsx)("h2", { children: des }), (0, jsx_runtime_1.jsxs)("span", { children: ["R$", valor] })] }), (0, jsx_runtime_1.jsx)("div", { className: Card_module_css_1.default.img, children: (0, jsx_runtime_1.jsx)("img", { src: img, alt: nome, width: 90 }) })] }));
}
//# sourceMappingURL=Card-itens.js.map