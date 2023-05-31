const connection = require('./connection')


//retorna as tasks do BD
const getAll =  async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

//Cadastra nova task
const createTask = async (task) => {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC ]);
    return {insertId: createdTask.insertId}

};

const deleteTask = async (id) => {
    const updateTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return updateTask;
}

const updateTask = async (id, task) => {

    const {title, status } = task;
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    const removedTask = await connection.execute(query, [title, status, id]);
    return removedTask;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};