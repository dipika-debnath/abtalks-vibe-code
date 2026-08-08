const totalDays = 60;
const defaultState = {
    currentDay: 12,
    streakDays: 11
};

const currentDayNumber = document.getElementById("current-day-number");
const missionDayNumber = document.getElementById("mission-day-number");
const currentStreak = document.getElementById("current-streak");
const streakCopy = document.getElementById("streak-copy");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const completeButton = document.getElementById("complete-button");
const completionMessage = document.getElementById("completion-message");
const taskLink = document.getElementById("task-link");

function loadState() {
    const saved = localStorage.getItem("abtalks-dashboard-state");
    if (!saved) {
        return { ...defaultState };
    }

    try {
        const parsed = JSON.parse(saved);
        return {
            currentDay: Number(parsed.currentDay) || defaultState.currentDay,
            streakDays: Number(parsed.streakDays) || defaultState.streakDays
        };
    } catch (error) {
        return { ...defaultState };
    }
}

function saveState(state) {
    localStorage.setItem("abtalks-dashboard-state", JSON.stringify(state));
}

function formatStreak(days) {
    return days === 1 ? "1 DAY" : `${days} DAYS`;
}

function render(state) {
    const completedDays = state.currentDay;
    const percent = Math.min(100, Math.round((completedDays / totalDays) * 100));

    currentDayNumber.textContent = state.currentDay;
    missionDayNumber.textContent = state.currentDay;
    currentStreak.textContent = formatStreak(state.streakDays);
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${completedDays} of ${totalDays} days completed`;
    streakCopy.textContent = state.currentDay < totalDays
        ? `One more day to reach your ${state.currentDay + 1}-day milestone.`
        : `You have completed the full 60-day challenge!`;

    if (taskLink) {
        taskLink.href = `day${state.currentDay}.html`;
    }

    completionMessage.style.display = "none";
}

function completeDay(state) {
    const completedDay = state.currentDay;
    state.streakDays += 1;
    if (state.currentDay < totalDays) {
        state.currentDay += 1;
    }

    saveState(state);
    render(state);

    completionMessage.textContent = `Great job! Day ${completedDay} is complete. Next mission is ready.`;
    completionMessage.style.display = "block";
}

const state = loadState();
render(state);

if (completeButton) {
    completeButton.addEventListener("click", function () {
        completeDay(state);
    });
}
