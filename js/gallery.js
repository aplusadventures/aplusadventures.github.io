document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.querySelector('.filter-buttons');
    if (!filterContainer) return;

    const filterBtns = filterContainer.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterContainer.querySelector('.active').classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                item.classList.remove('hide');
                if (filterValue !== 'all' && !item.dataset.category.includes(filterValue)) {
                    item.classList.add('hide');
                }
            });
        });
    });
});
