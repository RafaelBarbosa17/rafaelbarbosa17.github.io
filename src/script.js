const imgProfile = document.querySelector('.img-profile');
const reposContainer = document.querySelector('.repos-container');
const titleName = document.querySelector('.title-name');

const urlGithubApi = "https://api.github.com/users/rafaelbarbosa17";
const urlRepos = "https://api.github.com/users/rafaelbarbosa17/repos";

const getApiGitHub = async () => {
    const response = await (await fetch(urlGithubApi)).json();
    console.log(response)
    imgProfile.src = response.avatar_url;
    titleName.textContent = response.name
}

getApiGitHub()

const getReposGitHub = async () => {
    const repos = await fetch(urlRepos);
    const data = await repos.json();
    console.log(data)
    data.map(r => {
        const repoDate = r.pushed_at;
        const formatedRepoDate = new Date(repoDate).toLocaleDateString();
        let repositorio;
        if (!r.private) {
            repositorio = `
            <div class="repos-item">
                <div repos-text>
                    <h3 class="repos-name">${r.name}</h3>
                    <p class="repos-description">${r.description}</p>
                </div>
                <div class="repos-info">
                    <a class="repos-link" href="${r.html_url}" target="_blank">Ver no GitHub</a>
                    <p class="pushed-at">${formatedRepoDate}</p>
                </div>
            </div>
            `
            const divRepo = document.createElement('div');
            divRepo.innerHTML = repositorio;
            reposContainer.appendChild(divRepo)
            divRepo.classList.add('repos-box')
        } else {
            repositorio = ''
        }

    })
}

getReposGitHub()

const moreButton = document.querySelector(".more-button");
const moreInformations = document.querySelector('.more-informations');

let isActive = false;

moreButton.addEventListener('click', () => {
    isActive = !isActive
    if (isActive) {
        moreButton.classList.add('actived');
        moreButton.classList.remove('desactived')
        moreInformations.style.display = 'block';
        setTimeout(() => {
            document.querySelector("#burguer-m").style.display = 'none';
            moreInformations.style.right = 0;
        }, 100)
    } else {
        moreButton.classList.add('desactived')
        moreButton.classList.remove('actived')
        moreInformations.style.right = "-150px";
        setTimeout(() => {
            document.querySelector("#burguer-m").style.display = 'block';
            moreInformations.style.display = 'none'
        }, 300)
    }
})
