// ===== DADOS DOS JOGOS =====
const gamesData = [
    {
        id: 1,
        title: "GTA V",
        year: 2013,
        genre: "Ação/Aventura",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "Uma aventura de mundo aberto em Los Santos com três protagonistas e infinitas possibilidades.",
        fullDesc: "Grand Theft Auto V é um dos jogos mais vendidos de todos os tempos. Ambientado na cidade fictícia de Los Santos, o jogo segue a história de Michael, Franklin e Trevor, três criminosos com histórias interligadas. Com um enorme mundo aberto, missões variadas e um modo online extremamente popular, GTA V redefiniu o gênero de sandbox. A versão para PC trouxe gráficos aprimorados e suporte a mods."
    },
    {
        id: 2,
        title: "Minecraft",
        year: 2011,
        genre: "Sandbox",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "Construa, explore e sobreviva em um mundo de blocos gerado proceduralmente.",
        fullDesc: "Minecraft é um fenômeno global que permite aos jogadores construir praticamente qualquer coisa em um mundo infinito de blocos. Desde sua criação, o jogo expandiu para diversas plataformas e recebeu inúmeras atualizações. O modo criativo permite construções livres, enquanto o modo sobrevivência desafia os jogadores a coletar recursos, enfrentar criaturas e explorar masmorras. É um dos jogos mais influentes do século XXI."
    },
    {
        id: 3,
        title: "The Witcher 3: Wild Hunt",
        year: 2015,
        genre: "RPG",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "A jornada de Geralt de Rívia em busca de Ciri em um mundo aberto de fantasia sombria.",
        fullDesc: "The Witcher 3: Wild Hunt é considerado um dos melhores RPGs de todos os tempos. A história segue Geralt, um caçador de monstros, em uma missão para encontrar Ciri, sua filha adotiva, enquanto o mundo é ameaçado pela Caçada Selvagem. O jogo é elogiado por sua narrativa madura, missões secundárias complexas, sistema de combate refinado e um mundo aberto rico em detalhes. Recebeu diversas expansões aclamadas."
    },
    {
        id: 4,
        title: "Red Dead Redemption 2",
        year: 2018,
        genre: "Ação/Aventura",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "A épica história de Arthur Morgan e a gangue Van der Linde no velho oeste.",
        fullDesc: "Red Dead Redemption 2 é uma obra-prima da Rockstar Games. Ambientado em 1899, o jogo acompanha Arthur Morgan, um fora-da-lei membro da gangue Van der Linde, enquanto eles tentam sobreviver em uma América em transformação. Com um mundo aberto impressionante, gráficos de tirar o fôlego e uma narrativa profunda, o jogo é uma experiência imersiva no velho oeste. O modo online também oferece diversas atividades."
    },
    {
        id: 5,
        title: "Cyberpunk 2077",
        year: 2020,
        genre: "RPG",
        image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "Mergulhe em Night City como V, um mercenário em busca de imortalidade.",
        fullDesc: "Cyberpunk 2077 é um RPG de ação em mundo aberto ambientado em Night City, uma megalópole obcecada por poder, glamour e modificações corporais. Você joga como V, um mercenário que busca um implante único que concede imortalidade. Após um lançamento conturbado, o jogo recebeu inúmeras atualizações que melhoraram significativamente a experiência, incluindo a aclamada expansão Phantom Liberty. O jogo é conhecido por sua narrativa madura e visual futurista."
    },
    {
        id: 6,
        title: "Elden Ring",
        year: 2022,
        genre: "RPG",
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop",
        shortDesc: "Uma jornada épica pelas Terras Intermédias criada por FromSoftware e George R.R. Martin.",
        fullDesc: "Elden Ring é um RPG de ação em mundo aberto desenvolvido pela FromSoftware em colaboração com George R.R. Martin. O jogo apresenta as Terras Intermédias, um vasto continente cheio de masmorras, chefes desafiadores e segredos. Combinando a jogabilidade desafiadora característica da FromSoftware com um mundo aberto expansivo, Elden Ring foi aclamado pela crítica e ganhou inúmeros prêmios de Jogo do Ano. É conhecido por sua liberdade de exploração e design de níveis intricado."
    }
];

// ===== VARIÁVEIS GLOBAIS =====
const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const yearFilter = document.getElementById('year-filter');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('game-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// ===== FUNÇÕES =====
// Renderizar cards com base nos filtros
function renderGames(games) {
    gamesGrid.innerHTML = '';
    
    if (games.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    noResults.classList.add('hidden');

    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <div class="card-info">
                <h3>${game.title}</h3>
                <div class="card-meta">
                    <span>${game.year}</span>
                    <span class="card-genre">${game.genre}</span>
                </div>
                <p>${game.shortDesc}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(game));
        gamesGrid.appendChild(card);
    });
}

// Abrir modal com detalhes
function openModal(game) {
    modalBody.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h2>${game.title}</h2>
        <div class="modal-meta">
            <span><i class="fas fa-calendar-alt"></i> ${game.year}</span>
            <span><i class="fas fa-tag"></i> ${game.genre}</span>
        </div>
        <p><strong>${game.shortDesc}</strong></p>
        <div class="full-description">
            <p>${game.fullDesc}</p>
        </div>
    `;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Filtrar jogos
function filterGames() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const selectedYear = yearFilter.value;

    const filtered = gamesData.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'all' || game.genre === selectedGenre;
        const matchesYear = selectedYear === 'all' || game.year.toString() === selectedYear;
        return matchesSearch && matchesGenre && matchesYear;
    });

    renderGames(filtered);
}

// Popular filtros de gênero e ano
function populateFilters() {
    const genres = [...new Set(gamesData.map(game => game.genre))].sort();
    const years = [...new Set(gamesData.map(game => game.year))].sort((a, b) => a - b);

    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// ===== EVENT LISTENERS =====
// Busca e filtros
searchInput.addEventListener('input', filterGames);
genreFilter.addEventListener('change', filterGames);
yearFilter.addEventListener('change', filterGames);

// Fechar modal
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModalFunc();
});

// Menu mobile
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== INICIALIZAÇÃO =====
populateFilters();
renderGames(gamesData);