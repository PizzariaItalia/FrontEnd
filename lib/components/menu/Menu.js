"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Menu;
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_itens_1 = __importDefault(require("../../components/Card-itens"));
const menu_module_css_1 = __importDefault(require("./menu.module.css"));
const react_1 = require("@chakra-ui/react");
function Menu({ titulo, img, itens }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: menu_module_css_1.default.menu, children: (0, jsx_runtime_1.jsx)(react_1.Accordion.Root, { collapsible: true, defaultValue: ["Menu"], children: (0, jsx_runtime_1.jsxs)(react_1.Accordion.Item, { children: [(0, jsx_runtime_1.jsxs)(react_1.Accordion.ItemTrigger, { children: [(0, jsx_runtime_1.jsxs)(react_1.Avatar.Root, { shape: "rounded", style: { margin: 3 }, children: [(0, jsx_runtime_1.jsx)(react_1.Avatar.Image, {}), (0, jsx_runtime_1.jsx)(react_1.Avatar.Fallback, { name: titulo })] }), (0, jsx_runtime_1.jsxs)(react_1.HStack, { flex: "1", children: [titulo, " "] }), (0, jsx_runtime_1.jsx)(react_1.Accordion.ItemIndicator, {})] }), (0, jsx_runtime_1.jsx)(react_1.Accordion.ItemContent, { children: (0, jsx_runtime_1.jsx)(react_1.Accordion.ItemBody, { children: (0, jsx_runtime_1.jsx)("div", { className: menu_module_css_1.default.conteudo, children: itens.map((item, index) => ((0, jsx_runtime_1.jsx)("div", { className: menu_module_css_1.default.item, children: (0, jsx_runtime_1.jsx)(Card_itens_1.default, { nome: item.nome, img: item.img, des: item.des, valor: item.valor }, index) }))) }) }) })] }) }) }));
}
//# sourceMappingURL=Menu.js.map