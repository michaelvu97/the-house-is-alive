const Task = require("@task-core/task-core")

test('Create a dummy module', () => {
    let t = Task.task();
    expect(t).toBeDefined();
    expect(t.hello).toBeDefined();
})
