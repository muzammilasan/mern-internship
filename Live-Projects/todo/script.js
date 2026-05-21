function showValue() {
  var text = document.getElementById("textInput").value;
  if (text === "") {
    return;
  }

  var listElement = document.createElement("li");
  listElement.textContent = text + " ";
  document.getElementById("list").appendChild(listElement);

  var doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.style.backgroundColor = "green";
  listElement.appendChild(doneButton);

  doneButton.onclick = function () {
    listElement.style.color = "green";
  };

  var delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.style.backgroundColor = "red";
  listElement.appendChild(delButton);

  delButton.onclick = function () {
    listElement.remove();
  };

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.backgroundColor = "yellow";
  listElement.appendChild(editButton);

  editButton.onclick = function () {
    let newText = prompt("Edit Task:");
    listElement.firstChild.textContent = newText + " ";
  };
}

function clearAll() {
  document.getElementById("list").innerHTML = "";
}
