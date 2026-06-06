
const menu = document.getElementById('menu');
const toggleMenu = document.getElementById('toggle-menu');
// Kiểm tra xem có null không

toggleMenu.addEventListener('click', () => {// In ra lớp hiện tại của menu
   menu.classList.toggle('hidden');
   menu.classList.toggle('menu-expanded');
});

function renderPagination(containerId, pagination, onPageChange) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  if (!pagination || pagination.totalPages <= 1) {
    wrap.innerHTML = '';
    return;
  }

  const { page, totalPages } = pagination;
  let html = '';

  html += `
    <button class="page-btn" ${page <= 1 ? 'disabled' : ''} onclick="${onPageChange}(${page - 1})">
      Trước
    </button>
  `;

  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  if (start > 1) {
    html += `<button class="page-btn" onclick="${onPageChange}(1)">1</button>`;
    if (start > 2) html += `<span style="padding:0 4px;color:#718096">...</span>`;
  }

  for (let i = start; i <= end; i++) {
    html += `
      <button class="page-btn ${i === page ? 'active' : ''}" onclick="${onPageChange}(${i})">
        ${i}
      </button>
    `;
  }

  if (end < totalPages) {
    if (end < totalPages - 1) html += `<span style="padding:0 4px;color:#718096">...</span>`;
    html += `<button class="page-btn" onclick="${onPageChange}(${totalPages})">${totalPages}</button>`;
  }

  html += `
    <button class="page-btn" ${page >= totalPages ? 'disabled' : ''} onclick="${onPageChange}(${page + 1})">
      Sau
    </button>
  `;

  wrap.innerHTML = html;
}