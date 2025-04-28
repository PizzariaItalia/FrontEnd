"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
function Header() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: Header_module_css_1.default.body, children: [(0, jsx_runtime_1.jsx)("header", { className: Header_module_css_1.default.Header, children: (0, jsx_runtime_1.jsx)("div", { className: Header_module_css_1.default.Contato, children: (0, jsx_runtime_1.jsx)("a", { href: "", children: (0, jsx_runtime_1.jsx)("img", { src: "https://i.pinimg.com/736x/ed/9f/44/ed9f4416b4e2840112eee23022d63242.jpg", alt: "Contato", width: 60, height: 60 }) }) }) }), (0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { className: Header_module_css_1.default.Menu, children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "", children: "Entrada" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "", children: "Pizzas" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "", children: "Bebidas" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "", children: "Vinhos" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "", children: "Sobremesas" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "", children: "Sobre" }) })] }) })] }) }));
}
//# sourceMappingURL=Header.js.map