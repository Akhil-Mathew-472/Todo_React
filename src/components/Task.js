import React from "react";
import { Button } from "./Button";
import { customButtonStyle, taskStyles } from "../styles/styles";

function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            style={{
                ...taskStyles,
                textDecoration: task.completed ? "line-through" : "",
                opacity: task.completed ? "0.5" : "1",
            }}
        >
            {task.text}
            <div>
                <Button
                    text={task.completed ? "Undo" : "Done"}
                    handleOnClick={() => completeTask(index)}
                    ownStyle={customButtonStyle}
                />
                <Button
                    text={"Remove"}
                    handleOnClick={() => removeTask(index)}
                    ownStyle={customButtonStyle}
                />
            </div>
        </div>
    );
}

export default Task;
