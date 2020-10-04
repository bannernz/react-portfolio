import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

import 'react-bnb-gallery/dist/style.css';

const photosTest = [
	{
		photo: 'https://source.unsplash.com/aZjw7xI3QAA/1144x763',
		caption: 'Viñales, Pinar del Río, Cuba',
		subcaption: 'Photo by Simon Matzinger on Unsplash',
		thumbnail: 'https://source.unsplash.com/aZjw7xI3QAA/100x67',
	},
	{
		photo: 'https://source.unsplash.com/c77MgFOt7e0/1144x763',
		caption: 'La Habana, Cuba',
		subcaption: 'Photo by Gerardo Sanchez on Unsplash',
		thumbnail: 'https://source.unsplash.com/c77MgFOt7e0/100x67',
	},
	{
		photo: 'https://source.unsplash.com/QdBHnkBdu4g/1144x763',
		caption: 'Woman smoking a tobacco',
		subcaption: 'Photo by Hannah Cauhepe on Unsplash',
		thumbnail: 'https://source.unsplash.com/QdBHnkBdu4g/100x67',
	},
];

function PortfolioGallery({ photos, children }) {
	const [galleryOpened, setGalleryOpened] = useState(false);

	// if (photos === undefined) photos = photosTest;
	// if (photos.length === 0) photos = photosTest;

	// console.log('PHOTOS: ', photos);

	const toggleGallery = (e) => {
		setGalleryOpened(!galleryOpened);
	};

	return (
		<div>
			<span onClick={toggleGallery} className="photoGalleryLink">
				{children}
			</span>
			<ReactBnbGallery show={galleryOpened} photos={photos} onClose={toggleGallery} />
		</div>
	);
}

export default PortfolioGallery;
