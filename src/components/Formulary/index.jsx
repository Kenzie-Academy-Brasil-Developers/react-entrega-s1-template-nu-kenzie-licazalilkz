import { useState } from "react"
import {v4} from "uuid";
import styles from "./styles.module.scss"

export const Formulary = ({addPost}) => {
    const [description, setDescription] = useState("");
    const [moneyValue, setMoneyValue] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const totalValue = 0;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {description, moneyValue, typeValue, id: v4()};
        addPost(post);
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className={styles.content}>
                    <div>
                        <label className="font body" htmlFor="description">Descrição</label>
                        <input 
                        className="title three"
                        type="text" 
                        name="description" 
                        id="description" 
                        placeholder="Digite aqui a descrição"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}/>
                        <p>Exemplo: Compra de roupas</p>
                    </div>

                    <div>
                        <label className="font body" htmlFor="moneyValue">Valor (R$)</label>
                        <input
                        className="title three"
                        type="number" 
                        name="moneyValue" 
                        id="moneyValue" 
                        placeholder="Digite aqui o valor"
                        value={moneyValue}
                        onChange={(event) => setMoneyValue(event.target.value)}/>
                    </div>

                    <div>
                        <label className="font body" htmlFor="typeValue">Tipo de Valor</label>
                        <select className="title three" name="typeValue" id="typeValue" value={typeValue} onChange={(event) => setTypeValue(event.target.value)}>
                            <option value=""  disabled hidden>Escolha</option>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saida</option>
                        </select>
                    </div>
                    <button className="title three" type="submit">Inserir Valor</button>
                </div>
                <div className={styles.contentTotal}>
                    <div>
                        <p className="title three">Valor total</p>
                        <span className="font body">O valor se refere ao saldo</span>
                    </div>
                    <p>R$ {totalValue}</p>
                </div>
            </form>
        </div>
    )
}