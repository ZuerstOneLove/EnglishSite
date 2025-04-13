const companies = [
  {
    id: 'yandex',
    name: 'Yandex',
    region: 'russia',
    size: 'large',
    logo: 'pictures/Yandex_icon.png',
    employees: '10000+',
    salary: '250-600k ₽',
    market: 'International',
    culture: 'Developed corporate culture',
    career: 'Multi-stage growth system',
    projects: 'Large-scale product projects',
    education: 'practicum.yandex, internal programs',
    workProcess: 'Hybrid format'
  },
  {
    id: 'vk',
    name: 'VK',
    region: 'russia',
    size: 'large',
    logo: 'pictures/VK.com-logo.png',
    employees: '8000+',
    salary: '200-500k ₽',
    market: 'Governmental',
    culture: 'Formal structure',
    career: 'Clear career ladder',
    projects: 'Large social networks and services',
    education: 'Corporate University',
    workProcess: 'Flexible schedule'
  },
  {
    id: 'sber',
    name: 'Sber',
    region: 'russia',
    size: 'large',
    logo: 'pictures/Sberbank_Logo_2020.png',
    employees: '20000+',
    salary: '180-450k ₽',
    market: 'National',
    culture: 'Corporate culture',
    career: 'Grade system',
    projects: 'Fintech and the ecosystem',
    education: 'SberUniversity',
    workProcess: 'Flexible schedule'
  },
  {
    id: 'tinkoff',
    name: 'Tinkoff',
    region: 'russia',
    size: 'large',
    logo: 'pictures/tinkoff-logo.png',
    employees: '15000+',
    salary: '200-550k ₽',
    market: 'National',
    culture: 'Product approach',
    career: 'Rapid growth',
    projects: 'Fintech products',
    education: 'education.tbank',
    workProcess: 'Remote work'
  },
  {
    id: 'ozon',
    name: 'Ozon',
    region: 'russia',
    size: 'large',
    logo: 'pictures/Ozon_logo.png',
    employees: '12000+',
    salary: '180-400k ₽',
    market: 'National',
    culture: 'E-commerce culture',
    career: 'Level system',
    projects: 'Marketplace',
    education: 'Internal programs',
    workProcess: 'Hybrid format'
  },
  {
    id: 'google',
    name: 'Google',
    region: 'english',
    size: 'large',
    logo: 'pictures/Google_logo.png',
    employees: '150000+',
    salary: '$150-400k',
    market: 'Global',
    culture: 'Innovative culture',
    career: 'Level system',
    projects: 'Global products',
    education: 'Google University',
    workProcess: 'Hybrid format'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    region: 'english',
    size: 'large',
    logo: 'pictures/Microsoft_logo.png',
    employees: '180000+',
    salary: '$140-350k',
    market: 'Global',
    culture: 'Established traditions',
    career: 'Multi-level system',
    projects: 'Corporate solutions',
    education: 'Microsoft Learn',
    workProcess: 'Hybrid format'
  },
  {
    id: 'meta',
    name: 'Meta',
    region: 'english',
    size: 'large',
    logo: 'pictures/Meta_logo.png',
    employees: '70000+',
    salary: '$160-450k',
    market: 'Global',
    culture: 'Move Fast',
    career: 'Level system',
    projects: 'social networks',
    education: 'Meta Academy',
    workProcess: 'Hybrid format'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    region: 'english',
    size: 'large',
    logo: 'pictures/Amazon_logo.png',
    employees: '1500000+',
    salary: '$150-400k',
    market: 'Global',
    culture: 'Customer Obsession',
    career: 'Leadership Principles',
    projects: 'E-commerce and Cloud',
    education: 'Amazon University',
    workProcess: 'Hybrid format'
  },
  {
    id: 'apple',
    name: 'Apple',
    region: 'english',
    size: 'large',
    logo: 'pictures/Apple_logo.png',
    employees: '160000+',
    salary: '$160-450k',
    market: 'Gloabal',
    culture: 'Innovation and design',
    career: 'Grade system',
    projects: 'Hardware and Software',
    education: 'Apple University',
    workProcess: 'Hybrid format'
  },
  {
    id: 'skillbox',
    name: 'Skillbox',
    region: 'russia',
    size: 'small',
    logo: 'pictures/Skillbox_logo.png',
    employees: '200-500',
    salary: '120-250k ₽',
    market: 'Governmental',
    culture: 'Startup culture',
    career: 'Rapid growth',
    projects: 'EdTech projects',
    education: 'Mentoring',
    workProcess: 'Remote work'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    region: 'english',
    size: 'small',
    logo: 'pictures/GitLab_logo.png',
    employees: '1500+',
    salary: '$100-200k',
    market: 'Global',
    culture: 'Remote-first',
    career: 'Transparent growth system',
    projects: 'DevOps platform',
    education: 'Self-study',
    workProcess: 'Completely remotely'
  },
  {
    id: 'notion',
    name: 'Notion',
    region: 'english',
    size: 'small',
    logo: 'pictures/Notion-logo.png',
    employees: '400+',
    salary: '$130-250k',
    market: 'Global',
    culture: 'Product focus',
    career: 'Flat structure',
    projects: 'Productivity Tools',
    education: 'Peer Learning',
    workProcess: 'Mostly remotely'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    region: 'english',
    size: 'small',
    logo: 'pictures/Vercel_logo.png',
    employees: '400+',
    salary: '$120-220k',
    market: 'Global',
    culture: 'Developer-first',
    career: 'Rapid growth',
    projects: 'Frontend Infrastructure',
    education: 'Open Source',
    workProcess: 'Mostly remotely'
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
function openRus() {
  window.location.href = '../index.html';
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
      <option value="">Select company</option>
      <optgroup label="Russian companies">
        ${russianCompanies.map(company => `
          <option value="${company.id}">${company.name}</option>
        `).join('')}
      </optgroup>
      <optgroup label="Foreign companies">
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
    comparisonView.innerHTML = '<p class="text-center p-4">Select two companies to compare</p>';
    return;
  }

  comparisonView.innerHTML = `
    <div class="comparison-table">
      <h2 style="text-align: center;">Comparison of companies</h2>
      <div class="company-headers">
        <div></div>
        <div class="company-header">
          <img src="${company1.logo}" alt="${company1.name}" class="company-logo">
          <div class="company-title">
            ${company1.name}
            <span class="company-region">
              ${company1.region === 'russia' ? 'Russia' : 'Foreign company'}
            </span>
          </div>
        </div>
        <div class="company-header">
          <img src="${company2.logo}" alt="${company2.name}" class="company-logo">
          <div class="company-title">
            ${company2.name}
            <span class="company-region">
              ${company2.region === 'russia' ? 'Russia' : 'Foreign company'}
            </span>
          </div>
        </div>
      </div>
      ${createComparisonRow('Employees', 'users', company1.employees, company2.employees)}
      ${createComparisonRow('Salaries', 'money', company1.salary, company2.salary)}
      ${createComparisonRow('Market', 'globe', company1.market, company2.market)}
      ${createComparisonRow('Culture', 'building', company1.culture, company2.culture)}
      ${createComparisonRow('Career', 'chart', company1.career, company2.career)}
      ${createComparisonRow('Projects', 'briefcase', company1.projects, company2.projects)}
      ${createComparisonRow('Education', 'education', company1.education, company2.education)}
      ${createComparisonRow('WorkProcess', 'clock', company1.workProcess, company2.workProcess)}
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
        ${company.region === 'russia' ? 'Russia' : 'Foregin company'}
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

init();