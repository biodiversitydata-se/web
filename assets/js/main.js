// Mobile menu toggle
const toggleMobileMenu = () => {
  document.getElementById("topMenu").classList.toggle("hidden");
  document.getElementById("topMenuOpen").classList.toggle("hidden");
  document.getElementById("topMenuClose").classList.toggle("hidden");
}
const toggleMobileSubMenu = (id) => {
  const menu = document.getElementById(id);
  if (menu) {
    menu.classList.toggle("hidden");
    return false;
  }
  return true;
}

// Get cookie by name
const getCookie = (name) => {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let split = el.split('=');
    cookie[split[0].trim()] = split.slice(1).join("=");
  });
  return cookie[name];
}

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {

  // Set up search popup
  const searchIcon = document.getElementById('searchIcon');
  const searchForm = document.getElementById('searchForm');

  searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('hidden');
    searchIcon.classList.toggle('bg-sbdi-blue');
    searchForm.querySelector("input[name='query']").focus();
  });

  // Set up user menu
  const userIcon = document.getElementById('userIcon');
  const userMenu = document.getElementById('userMenu');

  userIcon.addEventListener('click', (e) => {
    e.preventDefault();
    userMenu.classList.toggle('hidden');
    userIcon.classList.toggle('bg-sbdi-blue');
  });

  // Show/hide menu items based on login status
  let userCookie = getCookie('ALA-Auth-user');
  if (userCookie) {
    let userDetails = userCookie.slice(1,-1).split('|');
    userIcon.title = `${userDetails[0]} ${userDetails[1]}`;
    document.querySelectorAll('.user-menu-item').forEach((el) => {
      el.classList.toggle('hidden');
    });
  }

  // Close search popup and user menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchIcon.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.add('hidden');
      searchIcon.classList.remove('bg-sbdi-blue');
    }
    if (!userIcon.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.classList.add('hidden');
      userIcon.classList.remove('bg-sbdi-blue');
    }
  });
});
