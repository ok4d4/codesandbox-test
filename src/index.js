import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  div.className = "list-row";
  p.innerText = text;

  completeButton.innerText = "完了";
  deleteButton.innerText = "削除";

  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.firstElementChild.textContent = null;

    deleteFromIncompleteList(addTarget);

    const p = document.createElement("p");
    const backButton = document.createElement("button");
    p.innerText = text;
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.append(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
