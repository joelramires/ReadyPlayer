import Head from 'next/head'
import {useStateContext} from '../components/HBOProvider'
import ls from 'local-storage'
import {v4} from 'uuid'
import { useRouter } from 'next/router';

export default function CreateUser() {
    const globalState = useStateContext();
    const router = useRouter ();
    const saveUser = () => {
      let users = [],
      user;

      if(ls('users') < 1){
    
          user ={
              id: v4(),
              user: globalState.user,
              myListID: []
          }
          users.push(user)
          ls('users', users)
          router.push('/login')

          console.log('users:', users)
          console.log('lsusers', ls('users'))
      } else{
          users = ls('users')
          user = {
            id: v4(),
            user: globalState.user,
            myListID: []
          }
          users.push(user)
          console.log('users:', users)
          console.log('lsusers', ls('users'))
          ls('users', users)
          router.push('/login')
      }
    }
    console.log(globalState)
    return (
        <div>
            <div className="create-user">
                <div className="create-user__top">
                    <div className="create-user__logo" />
                    <span className="create-user__title">
                        Who Is Watching?
          </span>
                </div>
                <div className="create-user__form">
                    <img className="create-user__user-img" src={globalState.defaultUserImg} />
                    <div className="create-user__input-group">
                        <label>Name</label>
                        <input value={globalState.user} onChange={globalState.createUserAction} type="text"
                            className="create-user__inputText" />
                        <div className="create-user__colors">
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(24,203,255)',
                                background: 'linear-gradient(135deg, rgba(24,203,255,1) 0%, rgba(66,34,125,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(40,28,34)',
                                background: 'linear-gradient(135deg, rgba(40,28,34,1) 0%, rgba(208,26,27,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(21,52,6)',
                                background: 'linear-gradient(135deg, rgba(21,52,6,1) 0%, rgba(101,20,163,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color--active" style={{

                                background: 'rgb(25,31,147)',
                                background: 'linear-gradient(135deg, rgba(25,31,147,1) 0%, rgba(52,255,0,1) 100%)'
                            }} />
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(96,25,147)',
                                background: 'linear-gradient(135deg, rgba(96,25,147,1) 0%, rgba(245,255,0,1) 100%)'
                            }} />



                        </div>
                    </div>
                </div>
                <div className="create-user__buttons">
                    <button className="create-user__cancel">Cancel</button>
                    <button className="create-user__save" onClick={saveUser}>Save</button>
                </div>
            </div>
        </div>
    )
}
