export default function navbarFunction() {
    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const sidebar = document.getElementById('sidebar');
        const closeSidebar = document.getElementById('closeSidebar');
        const overlay = document.getElementById('overlay');

        if (hamburger && sidebar && closeSidebar && overlay) {
            // Show sidebar
            hamburger.addEventListener('click', () => {
                sidebar.classList.remove('translate-x-full');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
            });

            // Hide sidebar
            closeSidebar.addEventListener('click', () => {
                sidebar.classList.add('translate-x-full');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
            });

            // Hide sidebar when overlay is clicked
            overlay.addEventListener('click', () => {
                sidebar.classList.add('translate-x-full');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
            });
        }
    });
}
