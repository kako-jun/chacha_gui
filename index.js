"use strict";

// const urlRoot = "http://localhost/api";
const urlRoot = "https://chacha-api.llll-ll.com/api";

const sendClicked = () => {
  const textarea = document.querySelector("#serif");
  if (textarea.value !== "") {
    sendSerif({ message: textarea.value });
    textarea.value = "";
  }
};

const sendSerif = async (serif) => {
  console.log(serif);

  const url = `${urlRoot}/serif`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serif),
  });

  console.log(res);
  return res.json();
};
