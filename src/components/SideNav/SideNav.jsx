
import { useEffect, useState } from "react"
import { auth } from './FirebaseConfig'


export const SideNav = () => {

    const [user, setUser] = useState('')
    const [pic, setPic] = useState('')

    useEffect(() => (

        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user.displayName)
                setPic(pic.photoUrl)
            }
        })
    ), [])

    return (
        <div className='sideBar'>
            <Link to='/'>
                <div className='pagelogo'>
                    <div className='logoName'>
                        <h1>Urban</h1>
                        <h1>Monkey</h1>
                    </div>
                    <img src='' alt='urbaan Monkey' />

                </div>
            </Link >
            <div className='profile' >
                <img src={pic} alt='' />
                <span>{user}</span>
            </div>

            <Navlink className={({ isActive }) => isActive === true ? 'linkActive sideLinks' : 'sideLinks'} to='/'>

            </Navlink>

            <Navlink className={({ isActive }) => isActive === true ? 'linkActive sideLinks' : 'sideLinks'} to='/shop'>

            </Navlink>


            <Navlink className={({ isActive }) => isActive === true ? 'linkActive sideLinks' : 'sideLinks'} to='/cart'>

            </Navlink>



        </div >
    )
}
