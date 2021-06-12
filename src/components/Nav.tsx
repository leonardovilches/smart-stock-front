import React from "react";
import '../Styles/NavStyle.css'

export default function Nav() {
    
    function printHello (hello: String) {
        console.log(hello)
    }

    return (
        <div className="navContainer">
            <button onClick={() => printHello("Menu")}>
                <img src="icons/Menu.svg" alt="Menu" ></img>
            </button>
            <button onClick={() => printHello("Produtos")}>
                <img src="icons/Produtos.svg" alt="Produtos" ></img>
            </button>
            <button onClick={() => printHello("Produtos")}>
                <img src="icons/Produtos.svg" alt="Produtos" ></img>
            </button>
            <button onClick={() => printHello("AddProdutos")}>
                <img src="icons/AddProdutos.svg" alt="AddProdutos" ></img>
            </button>
            <button onClick={() => printHello("RemoveProdutos")}>
                <img src="icons/RemoveProdutos.svg" alt="RemoveProdutos" ></img>
            </button>
            <button onClick={() => printHello("EditProdutos")}>
                <img src="icons/EditProdutos.svg" alt="EditProdutos" ></img>
            </button>
            <button onClick={() => printHello("Config")}>
                <img src="icons/Config.svg" alt="Config" ></img>
            </button>  
             
            
        </div>
    )
}