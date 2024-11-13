async function init() {
  const courses = await listCourses();
  let show = false;
  document
    .getElementById("list_courses_button")
    .addEventListener("click", () => {
      console.log(courses);
      show = !show;
      displayCourses(courses, show);
    });
}
init();

async function listCourses() {
  try {
    const response = await fetch("http://localhost:3000/cursos");
    const courses = await response.json();

    return courses;
  } catch (error) {
    console.error("Erro ao listar cursos:", error);
  }
}
function displayCourses(courses, show) {
  const listElement = document.getElementById("courses_list");
  listElement.innerHTML = "";

  if (show) {
    courses.forEach((course) => {
      const listItem = document.createElement("li");
      listItem.textContent = course;
      listElement.appendChild(listItem);
    });
  }
}
