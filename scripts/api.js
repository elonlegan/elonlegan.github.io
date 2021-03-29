const url = 'http://elonleganapi.atwebpages.com/wp-json/wp/v2/project';

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		let element = document.querySelector('#portfolio-container');
		data.forEach(
			(project) =>
				(element.innerHTML += `
			<article class="project">
          <a href="${project.url}" target="_blank" class="container--link">
            <div class="project__details">
              <h3 class="project__title">${project.title.rendered}</h3>
              <div class="project__tech" id="${project.slug}">
								${project.skills.forEach((skill) =>
									fetch(skill)
										.then((response) => response.json())
										.then((skill) => {
											let skillContainer = document.querySelector(
												`#${project.slug}`
											);
											skillContainer.innerHTML += `<a href="${skill.url_de_certificacion} " class="tech-button--${skill.slug} " target="_blank">${skill.slug} </a>`;
											console.log(data);
											console.log(skillContainer);
										})
								)}
              </div>
              <p class="project__date">
                <small><strong>Date:</strong> 00/00/2020</small>
              </p>
              <p class="project__url">
                <small
                  ><strong>You can see it in:</strong>
                  <a href="${
										project.url
									}" target="_blank" class="project__link" >
                    ${project.url}
                  </a></small
                >
              </p>
              <p class="project__description">
								${project.description}
              </p>
            </div>
            <figure class="project__image__container">
              <img
                class="project__image"
                src="${project.image}"
                alt="proyecto del curso de React Native"
              />
            </figure>
          </a>
        </article>
			`)
		);

		console.log(data);
	})
	.catch((err) => console.log(err));
