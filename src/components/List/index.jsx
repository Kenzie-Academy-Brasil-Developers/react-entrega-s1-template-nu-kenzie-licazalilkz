import { CardList } from "./PostCard"
import styles from "./styles.module.scss"


export const List = ({postList, deletePost}) => {
    return(
        <div className="container">
            <div className={styles.content}>
                <p className="title three">Resumo financeiro</p>
                {postList.length === 0?(
                    <p>Você ainda não possui nenhum lançamento</p>
                ):(
                    <ul>
                        {postList.map((post)=>{
                            return <CardList key={post.id} post={post} deletePost={deletePost}/>
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}