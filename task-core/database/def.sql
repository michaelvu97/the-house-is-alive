CREATE TABLE [IF NOT EXISTS] task_environment(
    task_environment_id SMALLINT NOT NULL AUTO_INCREMENT,
    task_name TINYTEXT NOT NULL,
    PRIMARY KEY (task_environment_id)
)