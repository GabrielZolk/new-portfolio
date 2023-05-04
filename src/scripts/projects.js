import projects from "../data/db.js";

function createStructure(title, image, link1) {
    const box = document.getElementsByClassName('projects-content')[0];
    const div = document.createElement('div');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const text = document.createElement('p');

    div.appendChild(link);
    link.appendChild(img);
    link.appendChild(text);

    link.setAttribute('href', link1);
    img.setAttribute('src', image);
    img.setAttribute('alt', title);
    text.innerText = title;

    img.style.maxWidth = '250px';
    img.style.height = '150px';
    div.classList.add('project');
    

    box.appendChild(div);

    return div;
}

projects.map(project => {
    const imageLink = `../../assets/projects/${project.image}.png`;
    const projectDiv = createStructure(project.title, imageLink, project.link2);

    return projectDiv;
});
