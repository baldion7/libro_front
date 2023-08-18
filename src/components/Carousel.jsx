import  { useState } from 'react'
import { ModalEstudent } from './ModalEstudent.jsx'

export const Carousel = ({ img, name, unicode,localhost, id ,text, setText, setestudiante, setopen }) => {

	const setOpen = () => {
		setopen(!open)
	}
	const setEstudiante = (id) => {
		setestudiante(id)
	}
const settext = (text) => {
	setText(text)
}

	return (
		<>
		<button onClick={() => {setEstudiante(id); setOpen(); settext(text)}} id={id}  className="carousel__item">
			<div className="carousel__item-head">
				<img src={localhost+'/'+img} alt={name} className='img-studen'/>
			</div>
			<div className="carousel__item-body">
				<p className="title">{name}</p>
				<p>{unicode}</p>
			</div>
		</button>

		</>
	);
};