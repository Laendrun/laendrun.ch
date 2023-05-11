document.querySelectorAll('.toAbout').forEach(toContactElem => {
	toContactElem.addEventListener('click', () => {
		document.getElementById('about_section').scrollIntoView();
	})
})

document.querySelectorAll('.toHome').forEach(toContactElem => {
	toContactElem.addEventListener('click', () => {
		document.getElementById('home_section').scrollIntoView();
	})
})

document.querySelectorAll('.toProjects').forEach(toContactElem => {
	toContactElem.addEventListener('click', () => {
		document.getElementById('projects_section').scrollIntoView();
	})
})

document.querySelectorAll('.toContact').forEach(toContactElem => {
	toContactElem.addEventListener('click', () => {
		document.getElementById('contact_section').scrollIntoView();
	})
})
