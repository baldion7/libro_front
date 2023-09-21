import '../Styles/ImgPrincipal.css'
import { useEffect, useState } from 'react'
export const ImgPrincipal = ({localhost}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [
		'/src/img/WhatsApp Image 2023-08-04 at 11.20.07 AM.jpeg',
		'/src/img/WhatsApp Image 2023-09-20 at 9.29.21 PM.jpeg',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="image-container">
			{images.map((image, index) => (
				<img
					key={index}
					src={localhost+'/'+image}
					alt={`Imagen ${index}`}
					className={index === currentImageIndex ? 'visible' : 'hidden'}
				/>
			))}
		</div>
	);
}