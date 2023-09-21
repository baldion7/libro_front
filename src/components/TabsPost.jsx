import '../App.css'
import { Link, useParams } from 'react-router-dom'
export const TabsPost = ({children , rute}) => {

	return (
		<>

			<Link  to={rute} style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgxecKfrTTRFizEwsOrsrj51Vpg9lZ8j8hQ&usqp=CAU)`, backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}  className={'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow font-Edu boton-3d'} >
				{children}
			</Link>

		</>
	)
}