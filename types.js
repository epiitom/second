const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(), // Fixed: Added 'zod.' before 'string'
    description: zod.string(), // Fixed: Added 'zod.' before 'string'
});

const updateTodo = zod.object({
    id: zod.string(), // Fixed: Added 'zod.' before 'string'
});

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
};
