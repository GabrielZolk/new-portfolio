import projects from "../data/db.js";

let currentScaledElement = null;

function createStructure(title, image, repo1, project1) {
    const box = document.getElementsByClassName('projects-content')[0];
    const div = document.createElement('div');
    const img = document.createElement('img');
    const text = document.createElement('p');
    const options = document.createElement('div');
    const repo = document.createElement('a');
    const project = document.createElement('a');

    div.append(img, text, options);
    options.append(repo, project);
    options.classList.add('options');

    repo.setAttribute('href', repo1); repo.target = '_blank';
    img.setAttribute('src', image);
    img.setAttribute('alt', title);
    text.innerText = title;

    img.style.maxWidth = '250px';
    img.style.height = '150px';
    img.style.borderRadius = '8px';
    div.classList.add('project');
    repo.innerHTML = "<i class='bx bxl-github'></i>"
    project.innerHTML = "<i class='bx bx-link-external'></i>"

    if (project1 === '') {
        project.addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            const button = document.querySelector('.onOff');
            modal.style.display = 'flex';
            function closeModal() {
                modal.style.display = 'none';
              }
              
              button.addEventListener('click', closeModal);
              button.addEventListener('touchstart', closeModal);
        });
    } else {
        project.setAttribute('href', project1);
        project.target = '_blank';
    }

    div.addEventListener('click', () => {
        if (currentScaledElement !== null && currentScaledElement !== div) {
            currentScaledElement.classList.remove('project-scale');
            currentScaledElement.querySelector('.options').classList.remove('show-options');
        }
        currentScaledElement = div;
        div.classList.toggle('project-scale');
        options.classList.toggle('show-options');

        currentScaledElement.style.transition = '.5s';
        options.style.transition = '.5s';
    });

    box.appendChild(div);

    return div;
}

document.addEventListener('click', (event) => {
    if (currentScaledElement !== null && !event.target.closest('.project')) {
        currentScaledElement.classList.remove('project-scale');
        currentScaledElement.querySelector('.options').classList.remove('show-options');
        currentScaledElement = null;
    }
});

projects.map(project => {
    const imageLink = `../../assets/projects/${project.image}.png`;
    const projectDiv = createStructure(project.title, imageLink, project.link1, project.link2);

    return projectDiv;
});

// projects.forEach(project => {
//     if (project.link2 === '') {
//         project.link2 = '../pages/notFound.html';
//     }
// });

