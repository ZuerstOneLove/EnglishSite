const companies = [
  {
    id: 'yandex',
    name: 'Яндекс',
    region: 'russia',
    size: 'large',
    logo: 'pictures/Yandex_icon.png',
    url: 'https://yandex.ru/company',
    employees: '10000+',
    salary: '250-600 тыс. ₽',
    market: 'Международный',
    culture: 'Развитая корпоративная культура',
    career: 'Многоступенчатая система роста',
    projects: 'Масштабные продуктовые проекты',
    education: 'Яндекс.Практикум, внутренние программы',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'vk',
    name: 'VK',
    region: 'russia',
    size: 'large',
    logo: 'pictures/VK.com-logo.png',
    url: 'https://vk.company',
    employees: '8000+',
    salary: '200-500 тыс. ₽',
    market: 'Федеральный',
    culture: 'Формальная структура',
    career: 'Четкая карьерная лестница',
    projects: 'Крупные соцсети и сервисы',
    education: 'Корпоративный университет',
    workProcess: 'Гибкий график'
  },
  {
    id: 'sber',
    name: 'Сбер',
    region: 'russia',
    size: 'large',
    logo: 'pictures/Sberbank_Logo_2020.png',
    url: 'https://www.sberbank.com',
    employees: '20000+',
    salary: '180-450 тыс. ₽',
    market: 'Национальный',
    culture: 'Корпоративная культура',
    career: 'Система грейдов',
    projects: 'Финтех и экосистема',
    education: 'СберУниверситет',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'tinkoff',
    name: 'Тинькофф',
    region: 'russia',
    size: 'large',
    logo: 'pictures/tinkoff-logo.png',
    url: 'https://www.tbank.ru',
    employees: '15000+',
    salary: '200-550 тыс. ₽',
    market: 'Национальный',
    culture: 'Продуктовый подход',
    career: 'Быстрый рост',
    projects: 'Финтех-продукты',
    education: 'Тинькофф Образование',
    workProcess: 'Удаленная работа'
  },
  {
    id: 'ozon',
    name: 'Ozon',
    region: 'russia',
    size: 'large',
    logo: 'pictures/Ozon_logo.png',
    url: 'https://ozon.tech',
    employees: '12000+',
    salary: '180-400 тыс. ₽',
    market: 'Национальный',
    culture: 'E-commerce культура',
    career: 'Система уровней',
    projects: 'Маркетплейс',
    education: 'Внутренние программы',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'google',
    name: 'Google',
    region: 'english',
    size: 'large',
    logo: 'pictures/Google_logo.png',
    url: 'https://about.google',
    employees: '150000+',
    salary: '$150-400k',
    market: 'Глобальный',
    culture: 'Инновационная культура',
    career: 'Система уровней',
    projects: 'Глобальные продукты',
    education: 'Google University',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    region: 'english',
    size: 'large',
    logo: 'pictures/Microsoft_logo.png',
    url: 'https://www.microsoft.com',
    employees: '180000+',
    salary: '$140-350k',
    market: 'Глобальный',
    culture: 'Устоявшиеся традиции',
    career: 'Многоуровневая система',
    projects: 'Корпоративные решения',
    education: 'Microsoft Learn',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'meta',
    name: 'Meta',
    region: 'english',
    size: 'large',
    logo: 'pictures/Meta_logo.png',
    url: 'https://about.meta.com',
    employees: '70000+',
    salary: '$160-450k',
    market: 'Глобальный',
    culture: 'Move Fast',
    career: 'Система уровней',
    projects: 'Социальные сети',
    education: 'Meta Academy',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    region: 'english',
    size: 'large',
    logo: 'pictures/Amazon_logo.png',
    url: 'https://www.amazon.com',
    employees: '1500000+',
    salary: '$150-400k',
    market: 'Глобальный',
    culture: 'Customer Obsession',
    career: 'Leadership Principles',
    projects: 'E-commerce и Cloud',
    education: 'Amazon University',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'apple',
    name: 'Apple',
    region: 'english',
    size: 'large',
    logo: 'pictures/Apple_logo.png',
    url: 'https://www.apple.com',
    employees: '160000+',
    salary: '$160-450k',
    market: 'Глобальный',
    culture: 'Инновации и дизайн',
    career: 'Система грейдов',
    projects: 'Hardware и Software',
    education: 'Apple University',
    workProcess: 'Гибридный формат'
  },
  {
    id: 'skillbox', //походу это не ит-компания
    name: 'Skillbox',
    region: 'russia',
    size: 'small',
    logo: 'pictures/Skillbox_logo.png',
    url: 'https://skillbox.ru',
    employees: '200-500',
    salary: '120-250 тыс. ₽',
    market: 'Федеральный',
    culture: 'Стартап-культура',
    career: 'Быстрый рост',
    projects: 'EdTech проекты',
    education: 'Менторство',
    workProcess: 'Удаленная работа'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    region: 'english',
    size: 'small',
    logo: 'pictures/GitLab_logo.png',
    url: 'https://about.gitlab.com',
    employees: '1500+',
    salary: '$100-200k',
    market: 'Глобальный',
    culture: 'Remote-first',
    career: 'Прозрачная система роста',
    projects: 'DevOps платформа',
    education: 'Самообучение',
    workProcess: 'Полностью удаленно'
  },
  {
    id: 'notion',
    name: 'Notion',
    region: 'english',
    size: 'small',
    logo: 'pictures/Notion-logo.png',
    url: 'https://www.notion.so',
    employees: '400+',
    salary: '$130-250k',
    market: 'Глобальный',
    culture: 'Продуктовый фокус',
    career: 'Плоская структура',
    projects: 'Productivity Tools',
    education: 'Peer Learning',
    workProcess: 'Remote-first'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    region: 'english',
    size: 'small',
    logo: 'pictures/Vercel_logo.png',
    url: 'https://vercel.com',
    employees: '400+',
    salary: '$120-220k',
    market: 'Глобальный',
    culture: 'Developer-first',
    career: 'Быстрый рост',
    projects: 'Frontend Infrastructure',
    education: 'Open Source',
    workProcess: 'Remote-first'
  }
];

let currentSize = 'large';
let currentView = 'table';
let selectedCompany1 = '';
let selectedCompany2 = '';

const company1Select = document.getElementById('company1');
const company2Select = document.getElementById('company2');
const comparisonView = document.getElementById('comparisonView');
const companyCards = document.getElementById('companyCards');

const icons = {
  users: '👥',
  money: '💰',
  globe: '🌍',
  building: '🏢',
  chart: '📈',
  briefcase: '💼',
  education: '🎓',
  clock: '⏰'
};

function init() {
  setupEventListeners();
  updateCompanySelects();
  updateView();
}
function openEng() {
window.location.href = 'ENG_ver/index.html';
  }
function setupEventListeners() {
  document.querySelectorAll('[data-size]').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-size]').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentSize = e.target.dataset.size;
      updateCompanySelects();
      updateView();
    });
  });

  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('[data-view]').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentView = e.target.dataset.view;
      updateView();
    });
  });

  company1Select.addEventListener('change', (e) => {
    selectedCompany1 = e.target.value;
    updateView();
  });

  company2Select.addEventListener('change', (e) => {
    selectedCompany2 = e.target.value;
    updateView();
  });
}

function updateCompanySelects() {
  const filteredCompanies = companies.filter(company => company.size === currentSize);
  const russianCompanies = filteredCompanies.filter(c => c.region === 'russia');
  const englishCompanies = filteredCompanies.filter(c => c.region === 'english');

  [company1Select, company2Select].forEach(select => {
    select.innerHTML = `
      <option value="">Выберите компанию</option>
      <optgroup label="Российские компании">
        ${russianCompanies.map(company => `
          <option value="${company.id}">${company.name}</option>
        `).join('')}
      </optgroup>
      <optgroup label="Зарубежные компании">
        ${englishCompanies.map(company => `
          <option value="${company.id}">${company.name}</option>
        `).join('')}
      </optgroup>
    `;
  });
}

function updateView() {
  if (currentView === 'table') {
    comparisonView.classList.remove('hidden');
    companyCards.classList.add('hidden');
    updateComparisonTable();
  } else {
    comparisonView.classList.add('hidden');
    companyCards.classList.remove('hidden');
    updateCompanyCards();
  }
}

function updateComparisonTable() {
  const company1 = companies.find(c => c.id === selectedCompany1);
  const company2 = companies.find(c => c.id === selectedCompany2);

  if (!company1 || !company2) {
    comparisonView.innerHTML = '<p class="text-center p-4">Выберите две компании для сравнения</p>';
    return;
  }

  comparisonView.innerHTML = `
    <div class="comparison-table">
      <h2 style="text-align: center;">Сравнение компаний</h2>
      <div class="company-headers">
        <div></div>
        <div class="company-header">
          <img src="${company1.logo}" alt="${company1.name}" class="company-logo">
          <div class="company-title">
            <a href="${company1.url}" target="_blank">${company1.name}</a>
            <span class="company-region">
              ${company1.region === 'russia' ? 'Россия' : 'Зарубежная компания'}
            </span>
          </div>
        </div>
        <div class="company-header">
          <img src="${company2.logo}" alt="${company2.name}" class="company-logo">
          <div class="company-title">
            <a href="${company2.url}" target="_blank">${company2.name}</a>
            <span class="company-region">
              ${company2.region === 'russia' ? 'Россия' : 'Зарубежная компания'}
            </span>
          </div>
        </div>
      </div>
      ${createComparisonRow('Сотрудники', 'users', company1.employees, company2.employees)}
      ${createComparisonRow('Зарплаты', 'money', company1.salary, company2.salary)}
      ${createComparisonRow('Рынок', 'globe', company1.market, company2.market)}
      ${createComparisonRow('Культура', 'building', company1.culture, company2.culture)}
      ${createComparisonRow('Карьера', 'chart', company1.career, company2.career)}
      ${createComparisonRow('Проекты', 'briefcase', company1.projects, company2.projects)}
      ${createComparisonRow('Обучение', 'education', company1.education, company2.education)}
      ${createComparisonRow('Рабочий процесс', 'clock', company1.workProcess, company2.workProcess)}
    </div>
  `;
}

function createComparisonRow(label, icon, value1, value2) {
  return `
    <div class="comparison-row">
      <div class="row-label">
        <span>${icons[icon]}</span>
        <span>${label}</span>
      </div>
      <div class="row-value">${value1}</div>
      <div class="row-value">${value2}</div>
    </div>
  `;
}

function updateCompanyCards() {
  const filteredCompanies = companies.filter(company => company.size === currentSize);
  
  companyCards.innerHTML = filteredCompanies.map(company => `
    <div class="company-card" data-id="${company.id}">
      <img src="${company.logo}" alt="${company.name}" class="company-logo">
      <h3>${company.name}</h3>
      <span class="region-badge ${company.region}">
        ${company.region === 'russia' ? 'Россия' : 'Зарубежная компания'}
      </span>
      <div class="card-info">
        <div class="card-info-item">
          ${icons.users} ${company.employees}
        </div>
        <div class="card-info-item">
          ${icons.money} ${company.salary}
        </div>
        <div class="card-info-item">
          ${icons.globe} ${company.market}
        </div>
        <div class="card-info-item">
          ${icons.clock} ${company.workProcess}
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('click', () => {
      const companyId = card.dataset.id;
      if (!selectedCompany1) {
        selectedCompany1 = companyId;
        company1Select.value = companyId;
      } else if (!selectedCompany2 && companyId !== selectedCompany1) {
        selectedCompany2 = companyId;
        company2Select.value = companyId;
      }
      updateView();
    });
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

init();
