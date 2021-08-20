var webUrl = 'https://elonlegan-api.000webhostapp.com';
var apiUrl = '/wp-json/wp/v2/project';

const url = webUrl + apiUrl;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		let element = document.querySelector('#portfolio-container');
		data.forEach(
			(project) =>
				(element.innerHTML += `
			<article class="project">
            <div class="project__details">
              <h3 class="project__title">${project.title.rendered}</h3>
              <div class="project__tech" id="${project.slug}">
								${skillInsert('#' + project.slug, project.skills)}
              </div>
              <p class="project__date">
                <small><strong>Date: </strong>${dateFormatter(
									project.date
								)}</small>
              </p>
              <p class="project__url">
                <small><strong>You can see it in:</strong>
                  <a href="${
										project.url
									}" class="project__link" target="_blank" rel="noopener noreferrer">
                    ${urlPrettier(project.url)}
                  </a></small>
              </p>
              <p class="project__description">
								${project.description}
              </p>
            </div>
            <figure class="project__image__container">
              <img
                class="project__image"
                src="${project.image}"
                alt="${project.title.rendered} project image"
              />
            </figure>
        </article>
			`)
		);

		document.getElementById('loader').style.display = 'none';
		console.log(data);
	})
	.catch((err) => console.log(err));

function dateFormatter(date) {
	let year = date.substr(0, 4);
	let month = date.substr(4, 2);
	let day = date.substr(6, 2);

	return day + '/' + month + '/' + year;
}

function urlPrettier(url) {
	let urlPrettier = url.substr(8);

	return urlPrettier;
}

function skillInsert(skillContainerId, skills) {
	var firstTime = true;
	skills.forEach((skill) =>
		fetch(skill)
			.then((response) => response.json())
			.then((skill) => {
				let skillContainer = document.querySelector(skillContainerId);
				if (firstTime == true) {
					skillContainer.innerHTML = `<a href="${skill.url_de_certificacion}" class="tech-button tech-button--${skill.slug}" target="_blank" rel="noopener noreferrer">${skill.title.rendered}</a>
					`;
					firstTime = false;
				} else {
					skillContainer.innerHTML += `<a href="${skill.url_de_certificacion}" class="tech-button tech-button--${skill.slug}" target="_blank" rel="noopener noreferrer">${skill.title.rendered}</a>
					`;
				}
			})
			.catch((err) => console.log(err))
	);
}
