// Lokalizacja
const translations = {
    pl: {
        home: 'Strona główna',
        matches: 'Mecze',
        club: 'O klubie',
        'league-table': 'Tabela',
        'hero-title': 'Zielona Pasja',
        'hero-subtitle': 'KS Śniadowo – serce Podlasia bije na boisku',
        'check-matches': 'Sprawdź mecze',
        'matches-title': 'Nasze mecze',
        'league-table-title': 'Tabela IV ligi podlaskiej',
        'team-stats-title': 'Statystyki KS Śniadowo',
        'buy-ticket': 'Kup bilet',
        'learn-more': 'Dowiedz się więcej',
        'club-title': 'Poczuj ducha KS Śniadowo',
        'club-text-1': 'KS Śniadowo to więcej niż klub – to pasja, która od 2003 roku łączy kibiców i zawodników Podlasia. Walczymy w IV Lidze z zielonym sercem.',
        'club-text-2': 'Dołącz do nas na stadionie i bądź częścią historii, którą tworzymy razem!',
        'footer-slogan': 'Zielona pasja od 2003 roku',
        'follow-us': 'Śledź nas',
        'sponsors-title': 'Nasi sponsorzy',
        copyright: '© 2025 KS Śniadowo. Wszystkie prawa zastrzeżone.',
        'no-matches': 'Brak meczów do wyświetlenia.',
        'error-matches': 'Nie udało się załadować meczów. Spróbuj ponownie później.',
        'error-table': 'Nie udało się załadować tabeli. Spróbuj ponownie później.',
        'error-stats': 'Nie udało się załadować statystyk. Spróbuj ponownie później.',
        'loading-matches': 'Ładowanie meczów...',
        'loading-table': 'Ładowanie tabeli...',
        'loading-stats': 'Ładowanie statystyk...',
        'win-percentage': 'Procent wygranych',
        'avg-goals-scored': 'Śr. bramek strzelonych',
        'avg-goals-conceded': 'Śr. bramek straconych',
        'both-teams-score': 'Obie drużyny strzelą',
        'clean-sheets': 'Czyste konta',
        'form-last-5': 'Forma (ostatnie 5)',
        matchLive: 'Mecz trwa!'
    },
    en: {
        home: 'Home',
        matches: 'Matches',
        club: 'About the Club',
        'league-table': 'League Table',
        'hero-title': 'Green Passion',
        'hero-subtitle': 'KS Śniadowo – the heart of Podlasie beats on the pitch',
        'check-matches': 'Check Matches',
        'matches-title': 'Our Matches',
        'league-table-title': 'Podlasie IV League Table',
        'team-stats-title': 'KS Śniadowo Stats',
        'buy-ticket': 'Buy Ticket',
        'learn-more': 'Learn More',
        'club-title': 'Feel the Spirit of KS Śniadowo',
        'club-text-1': 'KS Śniadowo is more than a club – it’s a passion uniting fans and players of Podlasie since 2003. We fight in the IV League with a green heart.',
        'club-text-2': 'Join us at the stadium and be part of the history we create together!',
        'footer-slogan': 'Green passion since 2003',
        'follow-us': 'Follow Us',
        'sponsors-title': 'Our Sponsors',
        copyright: '© 2025 KS Śniadowo. All rights reserved.',
        'no-matches': 'No matches to display.',
        'error-matches': 'Failed to load matches. Please try again later.',
        'error-table': 'Failed to load table. Please try again later.',
        'error-stats': 'Failed to load stats. Please try again later.',
        'loading-matches': 'Loading matches...',
        'loading-table': 'Loading table...',
        'loading-stats': 'Loading stats...',
        'win-percentage': 'Win Percentage',
        'avg-goals-scored': 'Avg. Goals Scored',
        'avg-goals-conceded': 'Avg. Goals Conceded',
        'both-teams-score': 'Both Teams to Score',
        'clean-sheets': 'Clean Sheets',
        'form-last-5': 'Form (Last 5)',
        matchLive: 'Match is live!'
    }
};

// Fallbackowe dane
const fallbackMatches = {
    matches: [
        {
            round: 1,
            date: "2025-04-12",
            home_team: "KS Śniadowo",
            away_team: "Wissa Szczuczyn",
            score: "2-1",
            time: "15:00"
        },
        {
            round: 2,
            date: "2025-04-19",
            home_team: "ŁKS Łomża",
            away_team: "KS Śniadowo",
            score: "",
            time: "16:00"
        }
    ]
};

const fallbackLeagueTable = {
    standings: [
        { position: 1, team: "KS Śniadowo", matches: 10, points: 20, wins: 6, draws: 2, losses: 2, goals_scored: 18, goals_conceded: 10 },
        { position: 2, team: "Wissa Szczuczyn", matches: 10, points: 18, wins: 5, draws: 3, losses: 2, goals_scored: 15, goals_conceded: 8 }
    ]
};

const fallbackTeamStats = {
    teams: [
        {
            name: "KS Śniadowo",
            win_percentage: "60%",
            avg_goals_scored: 1.8,
            avg_goals_conceded: 1.0,
            both_teams_to_score_percentage: "50%",
            clean_sheets_percentage: "30%",
            form_last_5_matches: "W-D-L-W-W",
            home: {
                win_percentage: "70%",
                avg_goals_scored: 2.0,
                avg_goals_conceded: 0.8,
                both_teams_to_score_percentage: "40%",
                clean_sheets_percentage: "40%",
                form_last_5_matches: "W-W-D-W-L"
            },
            away: {
                win_percentage: "50%",
                avg_goals_scored: 1.5,
                avg_goals_conceded: 1.2,
                both_teams_to_score_percentage: "60%",
                clean_sheets_percentage: "20%",
                form_last_5_matches: "L-W-D-L-W"
            }
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 800);
    });

    // Nawigacja mobilna
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        const isActive = burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        burger.setAttribute('aria-expanded', isActive);
    });

    // Zamknij menu po kliknięciu linku
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    // Przełącznik języka
    const langSwitcher = document.querySelector('.lang-switcher');
    langSwitcher.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            el.textContent = translations[lang][key] || el.textContent;
        });
        localStorage.setItem('lang', lang);
        updateAllCountdowns();
    });

    // Odczytaj zapisany język
    const savedLang = localStorage.getItem('lang') || 'pl';
    langSwitcher.value = savedLang;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        el.textContent = translations[savedLang][key] || el.textContent;
    });

    // Animacja przycisku biletu
    document.addEventListener('click', (e) => {
        const ticketBtn = e.target.closest('.ticket-btn');
        if (ticketBtn) {
            e.preventDefault();
            ticketBtn.classList.add('clicked');
            setTimeout(() => ticketBtn.classList.remove('clicked'), 400);
            console.log('Przejście do zakupu biletu');
        }
    });

    // Przycisk powrotu na górę
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Efekt przewijania dla nawigacji
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Lazy loading
    const lazyElements = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.src = element.dataset.src || element.src;
                element.classList.add('loaded');
                observer.unobserve(element);
            }
        });
    }, { rootMargin: '200px' });

    lazyElements.forEach(el => {
        el.dataset.src = el.src;
        observer.observe(el);
    });

    // Dostępność: focus management
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });

    // Funkcja formatowania daty
    const formatDate = (dateStr) => {
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) throw new Error('Invalid date');
            return date.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' });
        } catch {
            return dateStr;
        }
    };

    // Funkcja odliczania
    function updateCountdown(countdownEl, matchDate) {
        const now = new Date();
        const diff = matchDate - now;
        if (diff <= 0) {
            countdownEl.textContent = translations[langSwitcher.value].matchLive;
            countdownEl.classList.add('live');
            return false;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownEl.textContent = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
        return true;
    }

    function updateAllCountdowns() {
        const countdownEls = document.querySelectorAll('.countdown');
        countdownEls.forEach(el => {
            const matchDateStr = el.dataset.matchDate;
            if (matchDateStr) {
                const matchDate = new Date(matchDateStr);
                if (updateCountdown(el, matchDate)) {
                    setInterval(() => updateCountdown(el, matchDate), 1000);
                }
            }
        });
    }

    // Funkcja retry dla fetch
    async function fetchWithRetry(url, retries = 3, delay = 1000) {
        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(url, { cache: 'no-store' });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return await response.json();
            } catch (error) {
                if (i === retries - 1) throw error;
                console.warn(`Próba ${i + 1} nieudana dla ${url}, ponawiam za ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    // Ładowanie meczów
    const loadMatches = async () => {
        const timeline = document.getElementById('matches-timeline');
        try {
            const basePath = window.location.pathname.includes('kssniadowo') ? '/kssniadowo/' : '/';
            const data = await fetchWithRetry(`${basePath}match_results.json`).catch(() => fallbackMatches);

            timeline.innerHTML = '';

            const sniadowoMatches = data.matches.filter(match => 
                match.home_team === 'KS Śniadowo' || match.away_team === 'KS Śniadowo'
            );

            sniadowoMatches.sort((a, b) => new Date(b.date) - new Date(a.date));

            if (sniadowoMatches.length === 0) {
                timeline.innerHTML = '<p data-lang-key="no-matches">Brak meczów do wyświetlenia.</p>';
                return;
            }

            sniadowoMatches.forEach(match => {
                const isHome = match.home_team === 'KS Śniadowo';
                const opponent = isHome ? match.away_team : match.home_team;
                const isPast = new Date(match.date) < new Date();
                const matchCard = document.createElement('article');
                matchCard.className = `match-card ${isPast ? 'match-past' : 'match-upcoming'}`;
                matchCard.dataset.match = `${match.round}-${match.date}`;
                matchCard.dataset.type = isHome ? 'home' : 'away';

                const imageSrc = `images/match-${opponent.toLowerCase().replace(/\s/g, '-')}.jpg`;
                const fallbackImage = 'images/match-default.jpg';

                matchCard.innerHTML = `
                    <div class="match-image">
                        <picture>
                            <source srcset="${imageSrc}" type="image/jpeg">
                            <img src="${fallbackImage}" 
                                 alt="Herby KS Śniadowo i ${opponent}" 
                                 loading="lazy"
                                 onerror="this.parentElement.innerHTML='<div class=\\'fallback-image\\'>Brak obrazu</div>'">
                        </picture>
                        ${isPast ? `<span class="match-result">${match.score}</span>` : 
                            `<div class="countdown" aria-label="Odliczanie do meczu z ${opponent}" data-match-date="${match.date}T${match.time}"></div>`}
                    </div>
                    <div class="match-details">
                        <p class="match-date">${formatDate(match.date)} | ${match.time}</p>
                        <div class="match-teams">
                            <span>${match.home_team}</span>
                            <span class="vs">VS</span>
                            <span>${match.away_team}</span>
                        </div>
                        ${isPast ? 
                            `<a href="/match/${match.round}" class="btn btn-secondary" data-lang-key="learn-more">Dowiedz się więcej</a>` :
                            `<a href="#tickets" class="btn btn-primary ticket-btn" data-lang-key="buy-ticket">Kup bilet</a>`}
                    </div>
                `;
                timeline.appendChild(matchCard);
            });

            updateAllCountdowns();

            document.querySelectorAll('.matches-filter .filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelector('.matches-filter .active')?.classList.remove('active');
                    btn.classList.add('active');
                    const filter = btn.dataset.filter;
                    document.querySelectorAll('.match-card').forEach(card => {
                        card.style.display = filter === 'all' || card.dataset.type === filter ? 'flex' : 'none';
                    });
                });
            });
        } catch (error) {
            console.error('Błąd ładowania meczów:', error.message);
            timeline.innerHTML = '<p data-lang-key="error-matches">Nie udało się załadować meczów. Spróbuj ponownie później.</p>';
        }
    };

    // Ładowanie tabeli ligowej
    const loadLeagueTable = async () => {
        const tableBody = document.getElementById('league-table-body');
        try {
            const basePath = window.location.pathname.includes('kssniadowo') ? '/kssniadowo/' : '/';
            const data = await fetchWithRetry(`${basePath}league_table.json`).catch(() => fallbackLeagueTable);

            tableBody.innerHTML = '';
            data.standings.forEach(team => {
                const row = document.createElement('tr');
                row.className = team.team === 'KS Śniadowo' ? 'highlight-team' : '';
                row.innerHTML = `
                    <td>${team.position}</td>
                    <td>${team.team}</td>
                    <td>${team.matches}</td>
                    <td>${team.points}</td>
                    <td>${team.wins}</td>
                    <td>${team.draws}</td>
                    <td>${team.losses}</td>
                    <td>${team.goals_scored}:${team.goals_conceded}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Błąd ładowania tabeli:', error.message);
            tableBody.innerHTML = '<tr><td colspan="8" data-lang-key="error-table">Nie udało się załadować tabeli. Spróbuj ponownie później.</td></tr>';
        }
    };

    // Ładowanie statystyk drużyny
    const loadTeamStats = async () => {
        const statsContent = document.getElementById('team-stats-content');
        try {
            const basePath = window.location.pathname.includes('kssniadowo') ? '/kssniadowo/' : '/';
            const data = await fetchWithRetry(`${basePath}team_stats.json`).catch(() => fallbackTeamStats);
            const sniadowoStats = data.teams.find(team => team.name === 'KS Śniadowo');

            if (!sniadowoStats) throw new Error('Brak danych dla KS Śniadowo');

            const renderStats = (stats) => {
                statsContent.innerHTML = `
                    <div class="stat-card">
                        <h4 data-lang-key="win-percentage">Procent wygranych</h4>
                        <p>${stats.win_percentage}</p>
                        <div class="progress-bar"><div class="progress-fill" style="width: ${stats.win_percentage}"></div></div>
                    </div>
                    <div class="stat-card">
                        <h4 data-lang-key="avg-goals-scored">Śr. bramek strzelonych</h4>
                        <p>${stats.avg_goals_scored.toFixed(2)}</p>
                    </div>
                    <div class="stat-card">
                        <h4 data-lang-key="avg-goals-conceded">Śr. bramek straconych</h4>
                        <p>${stats.avg_goals_conceded.toFixed(2)}</p>
                    </div>
                    <div class="stat-card">
                        <h4 data-lang-key="both-teams-score">Obie drużyny strzelą</h4>
                        <p>${stats.both_teams_to_score_percentage}</p>
                        <div class="progress-bar"><div class="progress-fill" style="width: ${stats.both_teams_to_score_percentage}"></div></div>
                    </div>
                    <div class="stat-card">
                        <h4 data-lang-key="clean-sheets">Czyste konta</h4>
                        <p>${stats.clean_sheets_percentage}</p>
                        <div class="progress-bar"><div class="progress-fill" style="width: ${stats.clean_sheets_percentage}"></div></div>
                    </div>
                    <div class="stat-card">
                        <h4 data-lang-key="form-last-5">Forma (ostatnie 5)</h4>
                        <p>${stats.form_last_5_matches.replace(/-/g, ' ')}</p>
                    </div>
                `;
            };

            renderStats(sniadowoStats);

            document.querySelectorAll('.stats-filter .filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelector('.stats-filter .active')?.classList.remove('active');
                    btn.classList.add('active');
                    const filter = btn.dataset.stats;
                    if (filter === 'home') {
                        renderStats(sniadowoStats.home);
                    } else if (filter === 'away') {
                        renderStats(sniadowoStats.away);
                    } else {
                        renderStats(sniadowoStats);
                    }
                });
            });
        } catch (error) {
            console.error('Błąd ładowania statystyk:', error.message);
            statsContent.innerHTML = '<p data-lang-key="error-stats">Nie udało się załadować statystyk. Spróbuj ponownie później.</p>';
        }
    };

    // Inicjalizacja
    loadMatches();
    loadLeagueTable();
    loadTeamStats();
});