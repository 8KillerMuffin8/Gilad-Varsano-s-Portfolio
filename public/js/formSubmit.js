var messagesRef = firebase.database().ref('info');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var addInfo = getInputVal("addInfo");

    saveInfo(name, email, addInfo);
    document.getElementById('submitted').innerHTML = "Your form has been sent"
    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveInfo(name, email, addInfo) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        addInfo: addInfo
    });
}