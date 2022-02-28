import style from './styles.module.scss';
import logoImg from '../../assets/hollowed-boxes.svg'
import {api} from '../../services/api'
import { useEffect } from 'react';

export function MessageList() {

    useEffect(()=>{
        api.get('all').then(response=>{
            console.log(response.data)
        })
    }, [])
    return(

        
    <div className={style.messageListWrapper}>

     <img src={logoImg} alt="Rural 2022" />      

        <ul className={style.messageList}>
            <li className={style.message}> 
            <p className={style.messageContent}>Campos do Jordão esta fechado :(</p>

            <div className={style.messageUser}>
                <div className={style.userImage}>

                <img src="https://github.com/townsend10.png" alt="" />
                </div>
                <span>George Michael </span>
            </div>
            </li>
        </ul>

        <ul className={style.messageList}>
            <li className={style.message}> 
            <p className={style.messageContent}>Tôooooooo entendiadaaaaaaaaaaaaaaaaaaaaaa aaa </p>

            <div className={style.messageUser}>
                <div className={style.userImage}>

                <img src="https://github.com/townsend10.png" alt="" />
                </div>
                <span>M. Valentina </span>
            </div>
            </li>
        </ul>

        <ul className={style.messageList}>
            <li className={style.message}> 
            <p className={style.messageContent}>Vou no banheiro e ja volto!</p>

            <div className={style.messageUser}>
                <div className={style.userImage}>

                <img src="https://github.com/townsend10.png" alt="" />
                </div>
                <span>J. Alfredo </span>
            </div>
            </li>
        </ul>

        <ul className={style.messageList}>
            <li className={style.message}> 
            <p className={style.messageContent}>Tenho tempo para essas coisas não!</p>

            <div className={style.messageUser}>
                <div className={style.userImage}>

                <img src="https://github.com/townsend10.png" alt="" />
                </div>
                <span> Tua mãe </span>
            </div>
            </li>
        </ul>
        
    </div>
    
 
 
 ) 
}