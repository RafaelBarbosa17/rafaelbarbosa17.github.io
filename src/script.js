
const imgProfile = document.querySelector('.img-profile');
const titleName = document.querySelector('.title-name');

const urlGit = 'https://api.github.com/users/rafaelbarbosa17';


fetch(urlGit)
.then(data => data.json())
.then(dataObj => {
    imgProfile.src = dataObj.avatar_url;
    titleName.innerHTML = dataObj.name;
    console.log(dataObj)
})