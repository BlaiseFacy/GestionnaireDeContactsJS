/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

const afficheMenu = function () {
    console.log(`Bienvenue dans le gestionnaire des contacts :`)
    console.log(`1 : Lister les contacts`)
    console.log(`2 : Ajouter un contact`)
    console.log(`0 : Quitter`)
}

// Constructeur de l'objet Contact
const Contact = function (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
}

// Constructeur de l'objet Contacts qui contiend un tableau dans lequel on mettra les objets Contact
const Contacts = function () {
    this.listeContacts = new Array();
}

// Fonction permettant d'ajouter un contact à la liste des contacts
Contacts.prototype.ajouterContact = function (nom, prenom) {
    this.listeContacts.push(new Contact(nom, prenom));
}
// Fonction permettant de lister les contacts
Contacts.prototype.listerContacts = function () {
    this.listeContacts.forEach(element => {
        console.log(`Nom : ${element.nom}, Prénom : ${element.prenom}`)
    });
}
// Fonction permettant d'ajouter un contact grâce à une IHM
Contacts.prototype.ajouterContactForm = function () {
    let nom = "";
    while (nom == null || nom == "") {
        nom = prompt(`Entrez le nom du nouveau contact :`, "").trim();
    }
    let prenom = "";
    while (prenom == null || prenom == "") {
        prenom = prompt(`Entrez le prénom du nouveau contact :`, "").trim();
    }
    // On limite la taille de la chaine pour ne pas saturer la console
    if (nom.length > 15) {
        nom = nom.substring(0,15);
    }
    // On limite la taille de la chaine pour ne pas saturer la console
    if (prenom.length > 15) {
        prenom = prenom.substring(0,15);
    }
    this.ajouterContact(nom, prenom);
    console.log(`Le nouveau contact a été ajouté`)
}

// On instancie un objet de type Contacts et on lui ajoute 2 éléments
const contacts = new Contacts();
contacts.ajouterContact(`Lévisse`, `Carole`);
contacts.ajouterContact(`Nelsonne`, `Mélodie`);
let choix;

// On affiche le menu
afficheMenu();

// on boucle tant que l'utilisateur n'a pas choisi l'option quitter
while (choix !== "0") {
    choix = prompt(`Choisissez une option :`);
    switch (choix) {
        case "0":
            console.log(`Au revoir !`)
            break;
        case "1":
            contacts.listerContacts();
            afficheMenu();
            break;
        case "2":
            contacts.ajouterContactForm();
            afficheMenu();
            break;
        default:
    }
}