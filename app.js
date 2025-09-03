const root = document.getElementById('root');

function renderSection(section) {
  switch (section) {
    case 'lessons':
      root.innerHTML = `<h2>Lessons</h2>
        <p>Welcome to your English lessons! Here you'll find tailored content for professionals in New Zealand.</p>`;
      break;
    case 'slang':
      root.innerHTML = `<h2>Slang Dictionary</h2>
        <ul>
          <li><b>Chur</b> – Thanks</li>
          <li><b>Sweet as</b> – Great/No problem</li>
          <li><b>Kia ora</b> – Hello/Thank you</li>
        </ul>`;
      break;
    case 'accent':
      root.innerHTML = `<h2>Accent Practice</h2>
        <p>Listen and repeat common New Zealand phrases to improve your accent.</p>`;
      break;
    case 'progress':
      root.innerHTML = `<h2>Progress Tracker</h2>
        <p>Track your learning journey here. Stay motivated!</p>`;
      break;
    default:
      root.innerHTML = `<h2>Welcome!</h2>
        <p>Select a section from above to start learning.</p>`;
  }
}

['lessons', 'slang', 'accent', 'progress'].forEach(id => {
  document.getElementById(id).onclick = () => renderSection(id);
});

renderSection(); // Show welcome on load