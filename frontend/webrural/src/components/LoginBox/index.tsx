import styles from './styles.module.scss'
import {VscGithubInverted} from  'react-icons/vsc'
export function LoginBox(){

    return(
 
       
      
        
        <div className={styles.LoginBoxWrapper}>
            <strong>Anúncie e vende produtos rurais aqui!</strong>
            <a href="#"  className={styles.signWithGitHub}>
                <VscGithubInverted size={24}/> 
                Entrar
            
            </a>
         
     
        </div>
    )

}