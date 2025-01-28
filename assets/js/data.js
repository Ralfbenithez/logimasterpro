export const generateStudents = () => {
    return Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        name: `Élève ${i + 1}`,
        class: ['6ème A', '6ème B'][Math.floor(Math.random() * 2)],
        parent: `06 ${Math.random().toString().slice(2, 10)}`,
        average: (Math.random() * 10 + 8).toFixed(1),
    }));
};
