import React from 'react';
import { CarouselPost } from './CarouselPost.jsx';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

export const About1 = ({ rute, actividades }) => {
	const { id } = useParams();
	const { title, text, imagen, slider, youtube } = actividades[id];

	return (
		<section className="bg-white dark:bg-gray-800 p-10" style={{backgroundImage : `url(https://img.freepik.com/foto-gratis/textura-papel-gris_1253-25.jpg?w=2000)`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
			<div className="max-w-screen-xl px-4 py-8 mx-auto flex justify-center items-center">
				<div className="w-full flex flex-col items-center">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
						{title}
					</h1>
					<div>

					<p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl pr-14 pl-14">
						<img
							src={'/src/img/WhatsApp Image 2023-09-16 at 10.33.49 PM.jpeg'}
							style={{width: "10%",height: "auto", float:"right"}} alt=""/>
						{text.split('\n\n').map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</p>
					</div>
				</div>
			</div>
			<div className="lg:col-span-5 lg:flex">
				<CarouselPost rute={rute} imageens={imagen} slider={slider} />
			</div>
			<div className="pt-2">
				{youtube && (
					<div className="w-full px-4 pb-4 flex justify-center items-center">
						{youtube.map((item, index) => (
							<YouTube key={index} videoId={item.src} className="flex justify-center items-center w-full rounded" />
						))}
					</div>
				)}
			</div>
		</section>
	);
};
