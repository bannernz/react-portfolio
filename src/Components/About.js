import React, { Component } from 'react';
import Wobble from 'react-reveal/Wobble';

import Address from './Address';
import './About.css';

class About extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var profilepic = 'images/' + this.props.data.image;
			console.log(this.props.data.imagemessage);
			var profilepicAltMessage = this.props.data.imagemessage ?? '';
			var bio = this.props.data.bio;
			var street = this.props.data.address.street ?? '';
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var phone = this.props.data.phone ?? '';
			var email = this.props.data.email ?? '';
			var resumeDownload = this.props.data.resumedownload;
		}

		const ResumeDownloadCompontent = ({ file }) => {
			if (file === undefined || file === null || file === '') return <></>;

			return (
				<div className="columns download">
					<p>
						<a href={file} className="button">
							<i className="fa fa-download"></i>Download Resume
						</a>
					</p>
				</div>
			);
		};

		return (
			<section id="about">
				<div className="row">
					<Wobble effect="fadeInUp" effectOut="fadeOutLeft">
						<div className="three columns">
							<img className="profile-pic" src={profilepic} alt={profilepicAltMessage} />
						</div>
					</Wobble>
					<div className="nine columns main-col">
						<h2>About Me</h2>

						<p>{bio}</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<Address data={this.props.data} />
								<p className="address">
									<span>{email}</span>
								</p>
							</div>
							<ResumeDownloadCompontent file={resumeDownload} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
