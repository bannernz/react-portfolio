import React, {Component} from 'react';
import ProgressBar from 'react-customizable-progressbar'
import TechnicalSkills from './TechnicalSkills';

import './ProgressBar.css'
import ProfessionalSkills from './ProfessionalSkills';


class Resume extends Component {
    render() {
        
        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var skillicon = this.props.data.skillicon;
            var education = this.props.data.education.map(function (education) {
                return (
                    <div key={education.school}>
                        <h3>{education.school}</h3>
                        <p className="info">
                            {education.degree} <span>&bull;</span>
                            <em className="date">{education.graduated}</em>
                        </p>
                        <p>{education.description}</p>
                    </div>
                );
            });
            var work = this.props.data.work.map(function (work) {
                return (
                    <div key={work.company}>
                        <h3>{work.company}</h3>
                        <p className="info">
                            {work.title}
                            <span>&bull;</span> <em className="date">{work.years}</em>
                        </p>
                        <p>{work.description}</p>
                    </div>
                );
            });
            var technicalSkills = this.props.data.technical;
            var professionalSkills = this.props.data.professional;
            var skills = technicalSkills.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                var skillIcon = function (skills) {
                    if (skills.icon) {
                        return <></>;
                    }
                    return <span>{skills.icon}</span>;
                };
                return (
                    <li key={skills.name}>
                        <span style={{width: skills.level}} className={className}></span>
                        <em>{skills.name}</em>
                        {skills.logo ?
                        <div className="skillName">
                            {skills.logo? <img src={skills.logo} alt="skills icon" />: <span></span> }
                        </div> : <></>
                        }
                        
                    </li>
                );
            });
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                </div>

                <div className="row skill">
                    <TechnicalSkills data={technicalSkills} />
                    <ProfessionalSkills data={professionalSkills} />
                </div>

                {/* <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillmessage}</p>

                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div> */}
            </section>
        );
    }
}

export default Resume;


/*
                        <ProgressBar
                            radius={100}
                            progress={skills.value}
                            cut={120}
                            rotate={-210}
                            strokeWidth={25}
                            strokeColor="#5d9cec"
                            strokeLinecap="square"
                            trackStrokeWidth={20}
                            trackStrokeColor="#e6e6e6"
                            trackStrokeLinecap="square"
                            pointerRadius={0}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                        >
                            <div className="indicator-volume">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="fa fa-volume-up" />
                                    </div>
                                    <div className="percentage">{skills.value}%</div>
                                </div>
                            </div>
                        </ProgressBar>
*/