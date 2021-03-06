document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "body").style.visibility = "hidden"; 
      document.querySelector( 
        ".preloader").style.visibility = "visible"; 
  } else { 
      document.querySelector( 
        ".preloader").style.display = "none"; 
      document.querySelector( 
        "body").style.visibility = "visible"; 
  } 
}; 

const baseUrl = "https://api.github.com/graphql";

const token = config.ACCESS_TOKEN;

myHeaders = {
  "Content-Type": "application/json",
  Authorization: `bearer ${token}`
};

const queryFetch = (query) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({"query": query}),
    redirect: "follow"
  })
  .then(res => res.json())
};


queryFetch(
  `query {
    user(login: "JoshTeflon") {
      avatarUrl
    }
  }`
).then(({data}) => 
  `<img src=${data.user.avatarUrl} alt="profile image" width="20" height="20" />
  <span class="dropdown-icon"></span>`
).then(text => (document.getElementById('profile-icon').innerHTML = text))
 .catch(err => console.error(err, "error"));



queryFetch(
  `query {
    user(login: "JoshTeflon") {
      repositories(last: 20, orderBy: {field:CREATED_AT, direction:DESC}) {
        totalCount
      }
    }
  }`
).then(({data}) => 
  `<ul>
    <li>
      <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
        <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
      </svg>
        Overview
    </li>
    <li>
      <a id="repo-link" href="index.html">
        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
        </svg>
        Repositories
        <span class="repo-counter">${data.user.repositories.totalCount}</span>
      </a>
    </li>
    <li>
      <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
        <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
      </svg>
        Projects
    </li>
    <li>
      <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
      </svg>
        Packages
    </li>
</ul>`
).then(text => (document.getElementById('section-nav').innerHTML = text))
 .then(text => (document.getElementById('section-nav-mobile').innerHTML = text))
 .catch(err => console.error(err, "error"));


queryFetch(
  `query { 
    user(login: "JoshTeflon") {
      avatarUrl
      name
      login
      bio
    }
  }`
).then(({data}) => `
    <div>
      <img src=${data.user.avatarUrl} alt="profile image" width="280" height="280" />
      <div class="smiley-container">
        <div class="smiley">
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div>
      <h1>
          <span>${data.user.name}</span>
          <span>${data.user.login}</span>
      </h1>
      <p>${data.user.bio}</p>
    </div>
`)
 .then(text => (document.getElementById('section-left').innerHTML = text))
 .catch(err => console.log(err, "error"));


queryFetch(
  `query {
    user(login: "JoshTeflon") {
      repositories(last: 20, orderBy: {field:CREATED_AT, direction:DESC}) {
        nodes {
          name
          url
          description
          primaryLanguage {
            name
            color
          }
          stargazerCount
          forkCount
          updatedAt
        } 
      }
    }
  }`
).then(({data}) => { let output = `<div class="repo-search">
                                    <input type="text" placeholder="Find a repository..." />
                                  </div>`
  data.user.repositories.nodes.map(repoData => {
    return output +=
    `<div class="repo-details">
      <div>
        <h3><a href=${repoData.url} target="_blank" rel="noopener noreferrer">${repoData.name}</a></h3>
        <div class="repo-description">${repoData.description}</div>
      <ul>
        <li>
          <span class="repo-language-color" style="background-color: ${repoData.primaryLanguage.color}"></span>
          ${repoData.primaryLanguage.name}
        </li>
        <li class="star-fork">
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
          </svg>
            ${repoData.stargazerCount}
        </li>
        <li class="star-fork">
          <svg aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
            <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
          </svg>
            ${repoData.forkCount}
        </li>
        <li>Updated on ${new Date(repoData.updatedAt).toLocaleString('en-GB', { timeZone: 'UTC', day: '2-digit', month: 'long' })}</li>
      </ul>
    </div>
      <div>
        <button>
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            Star
        </button>
      </div>
    </div>`
});
document.getElementById('section-right').innerHTML = output
})
//.then(text => (document.getElementById('section-right').innerHTML = text))
.catch(err => console.log(err, "error"));