import { loadSidebar } from './components.js';
import { renderDashboard } from './dashboard.js';
import { renderStudents } from './students.js';
import { renderAttendance } from './attendance.js';

window.onload = () => {
    console.log('DOM entièrement chargé et analysé');
    loadSidebar();
    renderDashboard(); // Charger la page par défaut

    // Ajoutez ces lignes si vous avez besoin de charger les étudiants et la présence au démarrage
    // renderStudents();
    // renderAttendance();
};
