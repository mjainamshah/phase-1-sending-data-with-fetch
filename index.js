// Add your code here
const formData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData)
};

function submitData () {
return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const newId = object.id;
    document.body.innerHTML += newId;
  })
  .catch(function (error) {
    document.body.innerHTML += error.message;
  });
};