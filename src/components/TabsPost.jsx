import '../App.css'
import { Link, useParams } from 'react-router-dom'
export const TabsPost = ({children , rute}) => {

	return (
		<>

			<Link  to={rute} className={'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow font-Edu'} >
				{children}
			</Link>

		</>
	)
}