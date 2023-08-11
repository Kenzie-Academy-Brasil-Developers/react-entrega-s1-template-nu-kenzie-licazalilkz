import styles from "../../List/styles.module.scss"

export const CardList = ({post, deletePost}) => {
    return(
        <li className={post.typeValue === "entrada" ? styles.green : styles.gray}>
            <div>
                <p className="title three">{post.description}</p>
                <p className="font body">{post.typeValue}</p>
            </div>

            <div>
                <p>R${post.moneyValue}</p>
                <button onClick={()=>deletePost(post.id)}>Excluir</button>
            </div>
        </li>
    )
}