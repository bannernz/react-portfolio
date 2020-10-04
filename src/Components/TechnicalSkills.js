import React from 'react';

import './TechnicalSkills.css';

function TechnicalSkills({ data }) {
	var message = '';
	if (data) {
		const skillsSet = data.skills;
		message = data.message;
		var skills = skillsSet.map(function (skills, index) {
			var className = 'bar-expand ' + skills.name.toLowerCase();
			var SkillIcon = function (skills) {
				if (skills.icon) {
					return <div className="skillsIcon"></div>;
				}
				return <div className="skillsIcon">{skills.icon}</div>;
			};
			return (
				<div className="candidatos" key={`techskill_${index}`}>
					{skills.logo ? <div className="skillName">{skills.logo ? <img src={skills.logo} alt="skills icon" /> : <span></span>}</div> : <></>}
					<div className="parcial">
						<div className="info">
							<div className="nome">{skills.name}</div>
							<div className="percentagem-num">{/*skills.level*/}</div>
						</div>
						<div className="progressBar">
							<div className="percentagem" style={{ width: skills.level }} data-value={skills.value}></div>
						</div>
					</div>
				</div>
			);
		});
	}
	return (
		<div className="six columns main-col">
			<h1>
				<span>Technical Skills</span>
			</h1>
			<p>{message}</p>
			<div className="each-skills">{skills}</div>
		</div>
	);
}

export default TechnicalSkills;

/*
 */
