// // Sample Data
// const data = [
//   {
//     title: "Google Internship Drive",
//     category: "Internship",
//     department: "Placement Cell",
//     deadline: "2026-04-20"
//   },
//   {
//     title: "Hackathon 2026",
//     category: "Event",
//     department: "Coding Club",
//     deadline: "2026-04-18"
//   },
//   {
//     title: "Mid Sem Exam Notice",
//     category: "Announcement",
//     department: "Academics",
//     deadline: "2026-04-25"
//   },
//   {
//     title: "Web Dev Workshop",
//     category: "Event",
//     department: "Tech Club",
//     deadline: "2026-04-19"
//   },
//   {
//   title: "Amazon SDE Hiring Challenge",
//   category: "Internship",
//   department: "Placement Cell",
//   deadline: "2026-04-22"
// },
// {
//   title: "UI/UX Design Workshop",
//   category: "Event",
//   department: "Design Club",
//   deadline: "2026-04-17"
// },
// {
//   title: "Annual Cultural Fest",
//   category: "Event",
//   department: "Arts Club",
//   deadline: "2026-04-30"
// },
// {
//   title: "Scholarship Application Open",
//   category: "Announcement",
//   department: "Administration",
//   deadline: "2026-04-28"
// },
// {
//   title: "Microsoft Engage Program",
//   category: "Internship",
//   department: "Placement Cell",
//   deadline: "2026-04-19"
// },
// {
//   title: "Cyber Security Seminar",
//   category: "Event",
//   department: "Security Club",
//   deadline: "2026-04-21"
// },
// {
//   title: "Library Membership Renewal",
//   category: "Announcement",
//   department: "Library",
//   deadline: "2026-04-26"
// },
// {
//   title: "Startup Pitch Competition",
//   category: "Event",
//   department: "Entrepreneurship Cell",
//   deadline: "2026-04-23"
// },
// {
//   title: "Infosys Off-Campus Drive",
//   category: "Internship",
//   department: "Placement Cell",
//   deadline: "2026-04-18"
// },
// {
//   title: "Sports Meet Registration",
//   category: "Announcement",
//   department: "Sports Committee",
//   deadline: "2026-04-24"
// }
// ];

// // Deadline function
// function getTimeLeft(deadline) {
//   const today = new Date();
//   const end = new Date(deadline);

//   const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

//   if (diff <= 0) return "Deadline passed";
//   if (diff === 1) return "1 day left";

//   return `${diff} days left`;
// }

// // 
// function formatDate(dateStr) {
//   const options = { day: "numeric", month: "long" };
//   return new Date(dateStr).toLocaleDateString("en-IN", options);
// }

// // Render Function 
// function renderCards(items) {
//   const container = document.querySelector(".cards");

//   container.innerHTML = "";

//   items.forEach(item => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//       <h3 class="title">${item.title}</h3>
//       <span class="badge">${item.category}</span>
//       <p class="dept">Department: ${item.department}</p>
//       <p class="deadline">Deadline: ${formatDate(item.deadline)}</p> 
//       <p class="time-left">⏳ ${getTimeLeft(item.deadline)}</p>
//       <button class="save-btn">⭐ Save</button>
//     `;

//     container.appendChild(card);
//   });
// }


// renderCards(data);

// // SearchBAr
// const searchInput = document.getElementById("searchBar");
// searchInput.addEventListener("input", () => {
//   const value = searchInput.value.toLowerCase().trim();

//   const filtered = data.filter(item => {
//     return (
//       item.title.toLowerCase().includes(value) ||
//       item.category.toLowerCase().includes(value) ||
//       item.department.toLowerCase().includes(value)
//     );
//   });

//   renderCards(filtered);
// });


// ---------------- DATA ----------------
const data = [
  { id: 1, title: "Google Internship Drive", category: "Internship", department: "Placement Cell", deadline: "2026-04-20" },
  { id: 2, title: "Hackathon 2026", category: "Event", department: "Coding Club", deadline: "2026-04-18" },
  { id: 3, title: "Mid Sem Exam Notice", category: "Announcement", department: "Academics", deadline: "2026-04-25" },
  { id: 4, title: "Web Dev Workshop", category: "Event", department: "Tech Club", deadline: "2026-04-19" },
  { id: 5, title: "Amazon SDE Hiring Challenge", category: "Internship", department: "Placement Cell", deadline: "2026-04-22" },
  { id: 6, title: "UI/UX Design Workshop", category: "Event", department: "Design Club", deadline: "2026-04-17" },
  { id: 7, title: "Annual Cultural Fest", category: "Event", department: "Arts Club", deadline: "2026-04-30" },
  { id: 8, title: "Scholarship Application Open", category: "Announcement", department: "Administration", deadline: "2026-04-28" },
  { id: 9, title: "Microsoft Engage Program", category: "Internship", department: "Placement Cell", deadline: "2026-04-19" },
  { id: 10, title: "Cyber Security Seminar", category: "Event", department: "Security Club", deadline: "2026-04-21" },
  { id: 11, title: "Library Membership Renewal", category: "Announcement", department: "Library", deadline: "2026-04-26" },
  { id: 12, title: "Startup Pitch Competition", category: "Event", department: "Entrepreneurship Cell", deadline: "2026-04-23" },
  { id: 13, title: "Infosys Off-Campus Drive", category: "Internship", department: "Placement Cell", deadline: "2026-04-18" },
  { id: 14, title: "Sports Meet Registration", category: "Announcement", department: "Sports Committee", deadline: "2026-04-24" }
];

// ---------------- STATE ----------------
let currentFilter = "All";
let searchValue = "";
let savedItems = JSON.parse(localStorage.getItem("saved")) || [];

// ---------------- HELPERS ----------------
function getTimeLeft(deadline) {
  const today = new Date();
  const end = new Date(deadline);

  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

  if (diff <= 0) return "Deadline passed";
  if (diff === 1) return "1 day left";
  return `${diff} days left`;
}

function formatDate(dateStr) {
  const options = { day: "numeric", month: "long" };
  return new Date(dateStr).toLocaleDateString("en-IN", options);
}

// ---------------- RENDER ----------------
function renderCards(items) {
  const container = document.querySelector(".cards");
  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <span>${item.category}</span>
      <p>Department: ${item.department}</p>
      <p>Deadline: ${formatDate(item.deadline)}</p>
      <p>⏳ ${getTimeLeft(item.deadline)}</p>
      <button class="save-btn" data-id="${item.id}">
        ${savedItems.includes(item.id) ? "✅ Saved" : "⭐ Save"}
      </button>
    `;

    container.appendChild(card);
  });
}

// ---------------- FILTER LOGIC ----------------
function applyFilters() {
  let filtered = data;

  // search
  if (searchValue !== "") {
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue) ||
      item.department.toLowerCase().includes(searchValue)
    );
  }

  // category
  if (currentFilter !== "All" && currentFilter !== "Saved") {
    filtered = filtered.filter(item => item.category === currentFilter);
  }

  // saved tab
  if (currentFilter === "Saved") {
    filtered = filtered.filter(item => savedItems.includes(item.id));
  }

  renderCards(filtered);
}

// ---------------- SEARCH ----------------
document.getElementById("searchBar").addEventListener("input", (e) => {
  searchValue = e.target.value.toLowerCase().trim();
  applyFilters();
});

// ---------------- SIDEBAR FILTER ----------------
document.querySelectorAll(".menu li").forEach(item => {
  item.addEventListener("click", () => {
    currentFilter = item.getAttribute("data-filter");
    applyFilters();
  });
});

// ---------------- SAVE BUTTON ----------------
document.querySelector(".cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("save-btn")) {
    const id = Number(e.target.getAttribute("data-id"));

    if (savedItems.includes(id)) {
      savedItems = savedItems.filter(item => item !== id);
    } else {
      savedItems.push(id);
    }

    localStorage.setItem("saved", JSON.stringify(savedItems));
    applyFilters();
  }
});

// ---------------- INIT -----------
applyFilters();