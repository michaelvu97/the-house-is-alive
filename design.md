# Objects

## TaskEnvironment
An isolated environment within the database for segmentation. A.k.a. workspace/division.
Usually an environment would be a single house, perhaps a single room.
```
{
    task_environment_id: [PK] integer,
    task_environment_name: string
}
```

## TaskConfig
The definition/configuration of a task.
```
{
    task_id: [PK] integer,
    task_environment_id: [FK TaskEnvironment] integer,
    task_name: string,
    details: string,
    date_created: jsdatestring,
    is_active: boolean,
}
```

## TaskExecutionLog
History of executions of a task.
```
{
    task_id: [FK TaskConfig] integer,
    task_executor_id: [FK TaskExecutor] integer,
    task_completion_type_id: [FK TaskCompletionType] integer,
    date_started: jsdatestring,
    date_completed: jsdatestring,
    comment: string,
}
```

## TaskCompletionType
A dynamic enumeration of possible task outcomes.
```
{
    task_completion_type_id: [PK] integer,
    task_environment_id: [FK TaskEnvironment] integer,
    is_successful: boolean,
    title: string,
}
```

There shall be two task types pre-populated:
"Success" and "Fail".

## TaskExecutor
A person who is capable of completing a task.
```
{
    task_executor_id: [PK] integer,
    person_name: string,
}
```

## TaskEnvironmentMembership
A relationship between `TaskEnvironment` and `TaskExecutor`.
```
{
    task_environment_id: [FK TaskEnvironment] integer,
    task_executor_id: [FK TaskExecutor] integer,
}
```

## TaskRecurrenceConfig
A per-task configuration for how it should recurr. 
```
{
    task_id: [FK TaskConfig] integer,
    task_recurrence_type: integer,
    task_recurrence_params: string, // json
}
```

If a task does not have any entries in this table, it is assumed to have a null recurrence.

### TaskRecurrenceType

#### 1 - Timer
A countdown-style timer that waits for an elapsed number of days to pass before the task should recurr.
```
{
    num_days: integer,
}
```

