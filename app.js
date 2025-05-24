	//Переключение между секциями
	const newsBtn = document.getElementById('newsBtn');
  const updatesBtn = document.getElementById('updatesBtn');
  const section1 = document.getElementById('section1');
  const section2 = document.getElementById('section2');

  function showSection(sectionToShow) {
    section1.classList.add('hidden');
    section2.classList.add('hidden');
    sectionToShow.classList.remove('hidden');
  }

  newsBtn.addEventListener('click', () => {
    newsBtn.classList.add('active');
    updatesBtn.classList.remove('active');
    showSection(section1);
  });

  updatesBtn.addEventListener('click', () => {
    updatesBtn.classList.add('active');
    newsBtn.classList.remove('active');
    showSection(section2);
  });

  document.addEventListener("DOMContentLoaded", () => {
    showSection(section1);
  });

	// Закрытие при клике вне блока (Language)
	const toggleButton = document.getElementById('languageToggle');
	const dropdown = document.getElementById('languageDropdown');
	const selector = document.querySelector('.language-selector');
	toggleButton.addEventListener('click', () => {
		dropdown.classList.toggle('active');
		toggleButton.classList.toggle('rotate');
	});
	document.addEventListener('click', (event) => {
		if (!selector.contains(event.target)) {
			dropdown.classList.remove('active');
			toggleButton.classList.remove('rotate');
		}
	});

	// Сортировка карточек
	function sortNewsByDate() {
		const container = document.querySelector('.section-container1');
		if (!container) return;
		const cards = Array.from(container.querySelectorAll('.news-link'));
		cards.sort((a, b) => {
			const dateA = parseDate(a.querySelector('.news-data').textContent);
			const dateB = parseDate(b.querySelector('.news-data').textContent);
			return dateB - dateA;
		});
		container.innerHTML = '';
		cards.forEach(card => container.appendChild(card));
	}
	function parseDate(str) {
		const parts = str.trim().split(' ');
		if (parts.length < 3) return new Date(0); 
		const month = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
		const day = parts[1].replace(',', '');
		const year = parts[2];
		return new Date(`${month} ${day}, ${year}`);
	}
	window.addEventListener('DOMContentLoaded', sortNewsByDate);