async function createResume() {
  const body = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    education: education.value,
    skills: skills.value,
    experience: experience.value,
  };
  const res = await fetch("http://localhost:1718/api/resume/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}
