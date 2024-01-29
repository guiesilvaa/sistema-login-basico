import LoginCard from "../src/components/loginCard/loginCard"
import styles from '../styles/login.module.css'

export default function LoginPage() {
    return(
        <div className={styles.body}>
            <LoginCard/>
        </div>
    )
}