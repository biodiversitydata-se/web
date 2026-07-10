// Mobile menu toggle
const toggleMobileMenu = () => {
  document.getElementById("top-menu").classList.toggle("hidden");
  document.getElementById("top-menu-open").classList.toggle("hidden");
  document.getElementById("top-menu-close").classList.toggle("hidden");
}
const toggleMobileSubMenu = (id) => {
  const menu = document.getElementById(id);
  if (menu) {
    menu.classList.toggle("hidden");
    return false;
  }
  return true;
}

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {

  // Set up search popup
  const searchIcon = document.getElementById('search-icon');
  const searchForm = document.getElementById('search-form');

  searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('hidden');
    searchIcon.classList.toggle('bg-sbdi-darkblue');
    searchForm.querySelector("input[name='query']").focus();
  });

  // Close search popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchIcon.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.add('hidden');
      searchIcon.classList.remove('bg-sbdi-darkblue');
    }
  });
});
