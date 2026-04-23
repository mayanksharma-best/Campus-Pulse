// Sample Data
const data = [
  {
    title: "Google Internship Drive",
    category: "Internship",
    department: "Placement Cell",
    deadline: "2026-04-20"
  },
  {
    title: "Hackathon 2026",
    category: "Event",
    department: "Coding Club",
    deadline: "2026-04-18"
  },
  {
    title: "Mid Sem Exam Notice",
    category: "Announcement",
    department: "Academics",
    deadline: "2026-04-25"
  },
  {
    title: "Web Dev Workshop",
    category: "Event",
    department: "Tech Club",
    deadline: "2026-04-19"
  },
  {
  title: "Amazon SDE Hiring Challenge",
  category: "Internship",
  department: "Placement Cell",
  deadline: "2026-04-22"
},
{
  title: "UI/UX Design Workshop",
  category: "Event",
  department: "Design Club",
  deadline: "2026-04-17"
},
{
  title: "Annual Cultural Fest",
  category: "Event",
  department: "Arts Club",
  deadline: "2026-04-30"
},
{
  title: "Scholarship Application Open",
  category: "Announcement",
  department: "Administration",
  deadline: "2026-04-28"
},
{
  title: "Microsoft Engage Program",
  category: "Internship",
  department: "Placement Cell",
  deadline: "2026-04-19"
},
{
  title: "Cyber Security Seminar",
  category: "Event",
  department: "Security Club",
  deadline: "2026-04-21"
},
{
  title: "Library Membership Renewal",
  category: "Announcement",
  department: "Library",
  deadline: "2026-04-26"
},
{
  title: "Startup Pitch Competition",
  category: "Event",
  department: "Entrepreneurship Cell",
  deadline: "2026-04-23"
},
{
  title: "Infosys Off-Campus Drive",
  category: "Internship",
  department: "Placement Cell",
  deadline: "2026-04-18"
},
{
  title: "Sports Meet Registration",
  category: "Announcement",
  department: "Sports Committee",
  deadline: "2026-04-24"
}
];

// Deadline function
function getTimeLeft(deadline) {
  const today = new Date();
  const end = new Date(deadline);

  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

  if (diff <= 0) return "Deadline passed";
  if (diff === 1) return "1 day left";

  return `${diff} days left`;
}

// 
function formatDate(dateStr) {
  const options = { day: "numeric", month: "long" };
  return new Date(dateStr).toLocaleDateString("en-IN", options);
}

// Render Function 
function renderCards(items) {
  const container = document.querySelector(".cards");

  container.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3 class="title">${item.title}</h3>
      <span class="badge">${item.category}</span>
      <p class="dept">Department: ${item.department}</p>
      <p class="deadline">Deadline: ${item.deadline}</p>
      <p class="time-left">⏳ ${getTimeLeft(item.deadline)}</p>
      <button class="save-btn">⭐ Save</button>
    `;

    container.appendChild(card);
  });
}


renderCards(data);
