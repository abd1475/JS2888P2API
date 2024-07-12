
let contnr = document.querySelector(".container");
let item   = document.createElement("div");          
item.classList.add("row");
contnr.appendChild(item);

function getuserid() {
  let urlParams = new URLSearchParams(window.location.search);
  let userId = Number(urlParams.get('userId'));
  console.log("User ID:", userId);

  if (isNaN(userId) === false) {

    if (userId > 0 && userId < 11) {
      return userId
    } else {
      let numbers = Number(prompt("Please enter the number between 1-10"));

      if (isNaN(numbers) === false && numbers > 0 && numbers < 11) {
        return numbers
      } else {
        alert("Please enter the number between 1-10");
        throw new Error("Please valid number")
      };

    };  
  } else {
    alert("Please enter the number between 1-10");
    throw new Error("Please valid number")
  }
};
let userId = getuserid()


async function users() {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = await resp.json(); console.log(data)
    data.map((user) => {
      item.innerHTML+= `
        <div class="col-12 col-md-6 col-xl-4 col-xxl-3 my-3">
          <div class="card h-100">          
            <div class="card-body">
              <p class="card-text"><strong>User Id:</strong> ${user.userId}, <strong>Id:</strong> ${user.id},<br><strong>Post Title:</strong> ${user.title},<br><strong>Post Body:</strong> ${user.body}</p>
            </div>
          </div>
        </div>
      `;
    });
  }catch (error) {
    document.write("Opss Bilgiler gelmedi. Hata var. "+ error);
  }
};
users();


