function displayCardPets(){
    // travel the array
    let card = "";
    for (let i = 0; i < petSalon.pets.length; i++){
        // console.log(petSalon.pets[i].length);
        let pet = petSalon.pets[i];
        card +=`
            <div class="col"  id="${pet.id}">
                <div class="card h-100" id="${pet.name}">
                    <img src="https://bit.ly/3OOg05j" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>Name: ${pet.name}</h5>
                        <p class="card-text">Age: ${pet.age}\</p>
                        <p class="card-text">Gender: ${pet.gender}\</p>
                        <p class="card-text">Breed: ${pet.breed}\</p>
                        <p class="card-text">Color: ${pet.color}\</p>
                        <p class="card-text">Service: ${pet.service}\</p>
                        <p class="card-text">Owner: ${pet.owner}\</p>
                        <p class="card-text">Phone: ${pet.phone}</p>
                        <p class="card-text action-card">
                            <button class="btn" ><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn" onclick="deletePet(${pet.id})"><i class="fa-solid fa-trash-can"></i></button>
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    // inject the card into the HTML (register.html)
    document.getElementById('pet-cards').innerHTML = card;
}

function displayPetsTable(){
    let count = 1;
    let row = "";
    if(petSalon.pets.length===0){
        document.getElementById('pet-table').innerHTML = "";
    }
    else{
        document.getElementById('pet-table').innerHTML = `
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Breed</th>
            <th scope="col">Color</th>
            <th scope="col">Service</th>
            <th scope="col">Owner</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
        </tr>
    `;
        // travel the array (for)
        // tr+= (tr,th,td)
        for (let i = 0; i < petSalon.pets.length; i++){
            // console.log(petSalon.pets[i].length);
            let pet = petSalon.pets[i];
            row +=`
                    <tr id="${pet.name}" class="">
                        <th scope="row">${count}</th>
                        <td>${pet.name}</td>
                        <td>${pet.age}</td>
                        <td>${pet.gender}</td>
                        <td>${pet.breed}</td>
                        <td>${pet.color}</td>
                        <td>${pet.service}</td>
                        <td>${pet.owner}</td>
                        <td>${pet.phone}</td>
                        <td class="">
                            <div class="action-table">
                                <button class="btn"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button class="btn"><i class="fa-solid fa-trash-can"  onclick="deletePet(${pet.id})"></i></button>
                            </div>
                        </td>
                    </tr>

                  `
            count++;
        }
        // inject the tr into the HTML table
        document.getElementById('pet-table-row').innerHTML = row;
    }
}

