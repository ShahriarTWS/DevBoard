
let completedTask = 0;
let pendingTaskElement = document.getElementById('pending-task');
let totalTaskElement = document.getElementById('total-task');
let task = parseInt(pendingTaskElement.innerText) || 0;
let totalCompletedTask = parseInt(totalTaskElement.innerText) || 0;


function handleTaskCompletion(buttonId, taskTitleId) {
    document.getElementById(buttonId).addEventListener('click', function(event) {
        event.preventDefault();
        alert('Board updated Successfully');

        const taskTitle = document.getElementById(taskTitleId).innerText;
        const activityContainer = document.getElementById('activity-container');

        const completionTime = new Date().toLocaleTimeString("en-US", { 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit", 
            hour12: true 
        });

        const p = document.createElement('p');
        p.innerText = `You have completed the task ${taskTitle} at ${completionTime}`;
        p.classList.add('p-2', 'bg-bgcolor', 'mt-3', 'rounded-lg');
        activityContainer.appendChild(p);

        this.setAttribute('disabled', 'true');
        this.style.opacity = '20%';

        if (task > 0) {
            task--;
            totalCompletedTask++;
            pendingTaskElement.innerText = `0${task}`; 
            totalTaskElement.innerText = totalCompletedTask; 
        }

        if (task === 0) {
            alert('Congrats!!! You have completed all the current tasks 🎉');
        }
    });
}


handleTaskCompletion('btn1', 'task-title1');
handleTaskCompletion('btn2', 'task-title2');
handleTaskCompletion('btn3', 'task-title3');
handleTaskCompletion('btn4', 'task-title4');
handleTaskCompletion('btn5', 'task-title5');
handleTaskCompletion('btn6', 'task-title6');
