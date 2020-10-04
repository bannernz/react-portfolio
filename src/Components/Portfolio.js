import React, { Component } from 'react';
import './Portfolio.css';
import PortfolioGallery from './PortfolioGallery';

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

const LinkToPhotos = ({ photos, children }) => {
	if (photos === undefined || photos === null || photos === '' || photos.length === 0) {
		return children;
	}
	return <PortfolioGallery photos={photos}>{children}</PortfolioGallery>;
};

class Portfolio extends Component {
	render() {
		if (this.props.data) {
			var projects = this.props.data.projects.map(function (projects) {
				var projectImage = 'images/portfolio/' + projects.image;
				return (
					<div key={projects.title} className="columns portfolio-item">
						<div className="item-wrap">
							<LinkToPhotos photos={projects.photos}>
								<img alt={projects.title} src={projectImage} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>{projects.title}</h5>
										<p>{projects.category}</p>
									</div>
								</div>
								<div className="link-icon">
									<i className="fa fa-link"></i>
								</div>
							</LinkToPhotos>
						</div>
						<div className="link-icons">
							{projects.url && (
								<a href={projects.url} title={projects.title}>
									<div className="link-icon-sub">
										<i className="fa fa-link"></i>
									</div>
								</a>
							)}
							{projects.videourl && (
								<a href={projects.videourl} title={projects.title}>
									<div className="link-icon-sub">
										<i class="fas fa-video"></i>
									</div>
								</a>
							)}
						</div>
					</div>
				);
			});
		}

		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Works.</h1>
						<h2>Work In Progress</h2>

						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							{projects}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;

/*

https://www.instagram.com/web/friendships/41435399923/block/


https://www.instagram.com/web/friendships/8426914450/block/

*/
