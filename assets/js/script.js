// Creamos una IIFE
const getPosts = (async () => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await response.json();
        const idApi = document.getElementById('user-data');
        console.log(data);

        data.results.forEach(user => {
            const template = `
                                <div class="card">
                                    <img src="${user.picture.large}" alt="Image" style="100%"/>
                                    <div class="container">
                                        <h4>Name: <strong>${user.name.first} ${user.name.last}</strong></h4> 
                                        <p>Email: ${user.email}</p> 
                                        <p>Phone: ${user.phone}</p>
                                    </div>
                                </div>`;
            const div = document.createElement('div');
            idApi.appendChild(div).innerHTML = template
        });
    } catch (error) {
        console.log(error);
    }
})();