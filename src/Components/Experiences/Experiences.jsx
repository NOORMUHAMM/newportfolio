import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Shopify Developer | Software Engineer{' '}
					<a href='https://www.masaischool.com/'>@ CodeRapper</a>
				</div>
				<div className={styles.date}>DEC 2021 - present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							Working with the team of 25 member where I'm working as a frontend
							Developer.
						</li>
						<li>
							Worked on the new blog projects using new technology gatsby js and Graph ql 
							maintaining blog with contentful(CMS).
						</li>
						<li>
							Working on a project which is Shopify applications development using shopify polaris and Graph ql
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
