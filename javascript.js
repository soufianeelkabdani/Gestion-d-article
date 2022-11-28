var selectedRow = null;
// Clear allFields
function clearFields() {
    document.querySelector("#Nom").value = "";
    document.querySelector("#Marque").value = "";
    document.querySelector("#Prix").value = "";
    document.querySelector("#Dateproduction").value = "";
    document.querySelector("#Type").value = "";
    const Promo = document.querySelectorAll('input[nom="M"]:checked').value = "";

}
//  ADD DATA
document.querySelector(".formulaire").addEventListener("submit", (e) => {
    e.preventDefault()

    //GET FORM VALUE
    const nom = document.querySelector("#Nom").value;
    const marque = document.querySelector("#Marque").value;
    const prix = document.querySelector("#Prix").value;
    const date = document.querySelector("#Dateproduction").value;
    const type = document.querySelector("#Type").value;
    const Promo = document.querySelectorAll('input[name="M"]:checked');
    let promoValue = [];


    Promo.forEach((x) => {
        promoValue.push(x.value);

    });
    let reg = /^[a-z]{2,30}$/

    // VALIDATE
    if (nom === "" || reg.test(nom) === false || marque === "" || reg.test(marque) === false || prix === "" || date === "" || type === "" || promoValue.length == "") {
        let valin = document.getElementById('validno');
        valin.innerText = "min 2 et max 30";


    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#elements-list");
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${nom}</td>
            <td>${marque}</td>
            <td>${prix}</td>
            <td>${date}</td>
            <td>${type}</td>
            <td>${promoValue}</td>

            
            <td>
                        <a href="#" class="btnMod">Modifier</a>
             </td>   
             <td>   
                        <a href="#" class="btnSup">Supprimer</a>
            </td>
            `;
            list.appendChild(row);
            selectedRow = null;

        }
        else {
            selectedRow.children[0].textContent = nom;
            selectedRow.children[1].textContent = marque;
            selectedRow.children[2].textContent = prix;
            selectedRow.children[3].texContent = date;
            selectedRow.children[4].texContent = type;
            selectedRow = null;

        }
        clearFields();
    }
});

//  Edit Data
document.querySelector("#elements-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("btnMod")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#Nom").value = selectedRow.children[0].textContent;
        document.querySelector("#Marque").value = selectedRow.children[1].textContent;
        document.querySelector("#Prix").value = selectedRow.children[2].textContent;
        document.querySelector("#Dateproduction").value = selectedRow.children[3].textContent;
        document.querySelector("#Type").value = selectedRow.children[4].textContent;
        document.querySelectorAll('input[name="M"]').value = selectedRow.children[5].textContent;

    }
});
// DELETE DATA
document.querySelector("#elements-list").addEventListener("click", (e) => {
    target = e.target
    if (target.classList.contains("btnSup")) {
        target.parentElement.parentElement.setAttribute("id", "delet")
        let model = document.getElementById("mod");
        model.style.display = "block"
    }
});

let model = document.getElementById("mod");

function deletModel() {
    document.getElementById("delet").remove();
    model.style.display = "none"
}

function cancel() {
    document.getElementById("mod").style.display = "none";
    document.getElementById("delet").setAttribute("id", "")

}


