// Creo un array di oggetti di nome "team" con le informazioni fornite
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
];

// Stampo in console l'array di oggetti
// console.log(team);

for (let i = 0; i < team.length; i++) {
    const currentObj = team[i];
    // console.log(currentObj);

    const ul = document.getElementById("list");

    // Stampo nome in pagina
    let li = document.createElement("li");
    let h3 = document.createElement("h3");

    h3.append(currentObj.name);
    li.append(h3);

    // Stampo ruolo in pagina
    let p = document.createElement("p");

    p.append(currentObj.role);
    li.append(p);

    // Stampo le stringhe delle foto
    // let imageP = document.createElement("p");

    // imageP.append(currentObj.image);
    // li.append(imageP);

    // Trasformo le stringhe delle foto in immagini effettive
    let imageElement = document.createElement("img");
    imageElement.src = "./img/" + currentObj.image;
    // console.log(imageElement.src)
    li.append(imageElement);

    ul.append(li);
}
