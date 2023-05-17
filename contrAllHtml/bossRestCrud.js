(() => {
    let tokenbos = localStorage.getItem("tokenbos");
    if (!tokenbos) return location = "bossLogin.html";
})();

let BASE_URL = 'http://localhost:5000/api/restaurants'
async function resuorc() {
    let response = await fetch(BASE_URL);
    let data = await response.json();
    data ? data.map((item, i) => {
        let rest_wrapper = document.createElement("tr");
        rest_wrapper.innerHTML = `
                <th scope="row">${i+1}</th>
                <td>${item.rest_name}</td>
                <td>${item._id}</td>
                <td><delete class="btn btn-danger" id=${item._id}>delete</delete></td>
                <td><delete class="btn btn-info text-light" id=${item._id}>update</delete></td>
        `
        menu.append(rest_wrapper);
    }) : " Restarantlar hali ishga tushmadi. Soon"

}
resuorc()
async function resuorc2() {
    let response = await fetch("http://localhost:5000/api/workeradmin");
    let data = await response.json();
    data ? data.map((item, i) => {
        let rest_wrapper = document.createElement("tr");
        rest_wrapper.innerHTML =
            `
                <th scope="row">${i + 1}</th>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td><delete class="btn btn-danger" id=${item._id}>delete</delete></td>
                <td><delete class="btn btn-info text-light" id=${item._id}>update</delete></td>
        `
        alladmins.append(rest_wrapper);

    }) : " Restarantlar hali ishga tushmadi. Soon";
    let restaurants = await fetch(BASE_URL);
    let rest = await restaurants.json();

    rest ? rest.map((item, i) => {
        let rest_wrapper = document.createElement("option");
        rest_wrapper.innerHTML = item.rest_name
        AllRestaurantOption.append(rest_wrapper);

    }) : " Restarantlar hali ishga tushmadi. Soon"
    AllRestaurantOption.addEventListener("change", async (e) => {
        e.preventDefault();
        let response = await fetch(BASE_URL);
        let data = await response.json();
        data.forEach((item) => {
            if (item.rest_name == AllRestaurantOption.value) {
                bossaddWhichResta.value = item._id;
            }
        })
    })
}
resuorc2()