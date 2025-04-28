"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
const Menu_1 = __importDefault(require("../components/menu/Menu"));
const Header_1 = __importDefault(require("../components/Header"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const imagens = {
    imgPizzas: "https://media.istockphoto.com/id/901501348/pt/vetorial/slice-of-melted-cheese-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=7Zj4is26q_ybq7kcaGQL2yLUQjAd62AVwkMKss6uXtg=",
    imgEntrada: "https://www.minhareceita.com.br/app/uploads/2023/11/entradas-chique-portal-minha-receita.jpg",
    imgBebidas: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCopxbuMDeDx9TKly5vBAjToUqFPmY52acVw&s",
    imgVinhos: "https://i1.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2022/06/sociedade_da_mesa_vinhos_clube_de_vinhos_revista_tudo_sobre_o_vinho_tinto.jpg",
    imgSobremesas: "https://www.receiteria.com.br/wp-content/uploads/pudim-de-sorvete-capa-730x480.png"
};
function Home() {
    const [entradas, setEntradas] = (0, react_1.useState)([]);
    const [pizzas, setPizzas] = (0, react_1.useState)([]);
    const [bebidas, setBebidas] = (0, react_1.useState)([]);
    const [vinhos, setVinhos] = (0, react_1.useState)([]);
    const [sobremesas, setSobremesas] = (0, react_1.useState)([]);
    function getApiHome() {
        return () => __awaiter(this, void 0, void 0, function* () {
            const responde = yield axios_1.default.get("http://localhost:3000/menu");
            const data = responde.data;
            if (data) {
                setPizzas(data.Pizzas),
                    setEntradas(data.Entrada),
                    setBebidas(data.Bebidas),
                    setVinhos(data.Vinhos),
                    setSobremesas(data.Sobremesas);
            }
            else {
                ("Erro ao obter dados");
            }
        });
    }
    function requestApiMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield getApiHome();
            }
            catch (error) {
                console.error("Erro ao conseguir menu", error);
            }
        });
    }
    (0, react_1.useEffect)(() => {
        requestApiMenu();
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: 'containerTE', children: [(0, jsx_runtime_1.jsx)(Menu_1.default, { titulo: "ENTRADA", img: imagens.imgEntrada, itens: entradas }), (0, jsx_runtime_1.jsx)(Menu_1.default, { titulo: "PIZZAS", img: imagens.imgPizzas, itens: pizzas }), (0, jsx_runtime_1.jsx)(Menu_1.default, { titulo: "BEBIDAS", img: imagens.imgBebidas, itens: bebidas }), (0, jsx_runtime_1.jsx)(Menu_1.default, { titulo: "VINHOS", img: imagens.imgVinhos, itens: vinhos }), (0, jsx_runtime_1.jsx)(Menu_1.default, { titulo: "SOBREMESAS", img: imagens.imgSobremesas, itens: sobremesas })] })] }));
}
//# sourceMappingURL=Home.js.map