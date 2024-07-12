
let contnr = document.querySelector(".container");
let item   = document.createElement("div");          
item.classList.add("row");
contnr.appendChild(item);

async function users() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    data.map((user) => {
      item.innerHTML+= `
        <div class="col-12 col-md-6 col-xl-4 col-xxl-3 my-3">
          <div class="card h-100">          
            <div class="card-body">
              <h2 class="card-title"><i class="fa-solid fa-user mx-3" style="color:blue"></i></h2>
              <h6 class="card-text">Full Name: ${user.name},<br> User Name: ${user.username}, Id: ${user.id}</h6> 
    
              <h2 class="card-title mt-3"><i class="fa-regular fa-building mx-3" style="color:blue"></i></h2>
              <p class="card-text">
                Company: ${user.company.name},<br> Motto: ${user.company.catchPhrase},<br> Bs: ${user.company.bs}
              </p>
              
              <h2 class="card-title mt-3"><i class="fa-regular fa-comment-dots mx-3" style="color:blue"></i></h2>
              <p class="card-text">
                Website: ${user.website},<br> E-mail: ${user.email},<br> Phohe: ${user.phone}
              </p>
    
              <h2 class="card-title"><i class="fa-solid fa-location-dot mx-3" style="color:blue"></i></h2>
              <p class="card-text">
                Address: ${user.address.street} ${user.address.suite} ${user.address.city},<br> 
                Zipcode: ${user.address.zipcode},<br> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}
              </p>
              <p><a href="./posts.html?userId=${user.id}" role="button" class="my-4 btn btn-outline-primary btn-sm rounded-5">See the posts</a></p> 
            </div>
          </div>
        </div>
      `;
    });
  }catch (error) {
    document.write("Opss Bilgiler gelmedi. Hata var. "+ error);
  };
};
users();
