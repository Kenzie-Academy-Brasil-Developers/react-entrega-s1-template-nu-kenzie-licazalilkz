import { Header } from "../Header"
import styles from "./styles.module.scss"

export const DefaultTemplate = ({children}) =>{
    return(
        <main>
            <Header/>
            <div className={styles.content}>
            {children}
            </div>
        </main>
    )
}

