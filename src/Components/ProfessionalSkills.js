import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import './ProfessionalSkills.css';

function ProfessionalSkills({ data }) {
	var message = '';
	if (data) {
		const skillsSet = data.skills;
		message = data.message;
		var skills = skillsSet.map(function (skill, index) {
			return (
				<li key={`proskill_${index}`}>
					<ProgressBar progress={skill.value} radius={50} rotate={-210} cut={120} initialAnimation={true} transition="1.5s ease 0.5s" trackTransition="0s ease" key={`proskill_${index}`}>
						<p
							style={{ position: 'absolute', top: '50%', left: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgb(85, 85, 85)' }}
							className="progressbar-text">
							{skill.value}%
						</p>
						<div className="pr-skill-name" style={{ position: 'absolute', bottom: '0px', left: '0px', right: '0px' }}>
							{skill.name}
						</div>
					</ProgressBar>
				</li>
			);
		});
	}

	return (
		<div className="six columns main-col">
			<h1>
				<span>Professional Skills</span>
			</h1>
			<p>{message}</p>
			<ul className="mh-professional-progress">{skills}</ul>
		</div>
	);
}

export default ProfessionalSkills;
