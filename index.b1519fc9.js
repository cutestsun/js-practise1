var t={form:document.querySelector("#task-form"),taskList:document.querySelector("#task-list")};function e(t){const e={id:Date.now()};return new FormData(t.currentTarget).forEach(((t,a)=>e[a]=t)),e}var a={addNote:function(t){const e=JSON.parse(localStorage.getItem("notesData"))||[];e.push(t),localStorage.setItem("notesData",JSON.stringify(e))}};t.form.addEventListener("submit",(function(t){t.preventDefault(),a.addNote(e(t))}));
//# sourceMappingURL=index.b1519fc9.js.map
