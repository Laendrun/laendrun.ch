const getColors = async () => {
	const colorsData = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
	const colorsText = await colorsData.text();
	localStorage.setItem('colors', colorsText);
}

if (!(localStorage.colors))
	getColors();

const getColor = (language) => {
	let colors = JSON.parse(localStorage.getItem('colors'));
	return (language ? colors[language].color : 'lightgray');
}

const createCards = () => {
	fetch('https://api.github.com/users/Laendrun/repos')
	.then((response) => response.text())
	.then((text) => {
		let repos = JSON.parse(text);
		repos.forEach((repo) => {
			const template = document.getElementById('repo-template');
			const parent = document.querySelector('.projects-content');
			const clone = template.content.cloneNode(true);
		
			let repoLink = clone.querySelectorAll('a')[0];
			repoLink.setAttribute('href', repo.html_url);
			repoLink.innerText = repo.name;
		
			let repoDesc = clone.querySelectorAll('span')[0];
			repoDesc.innerText = repo.description;
		
			let langSpan = clone.querySelectorAll('span')[1];
			let col = getColor(repo.language);
			let value = 'background-color: ' + col + ';';
			langSpan.setAttribute('style', value);

			let repoLang = clone.querySelectorAll('.repo-lang')[0];
			let lang = repo.language ? repo.language : '';
			repoLang.innerHTML += '<span>' + lang + '</span>';

			let repoStars = clone.querySelectorAll('.repo-stars')[0];
			let starsSpan = document.createElement('span');
			starsSpan.innerText = repo.stargazers_count;
			repoStars.append(starsSpan);

			let repoForks = clone.querySelectorAll('.repo-forks')[0];
			let forksSpan = document.createElement('span');
			forksSpan.innerText = repo.forks_count;
			repoForks.append(forksSpan);

			parent.append(clone);
		})
	})
}

createCards();