const totalDays = 60;

const defaultState = {
    currentDay: 12,
    streakDays: 11
};

const currentDayNumber =
    document.getElementById("current-day-number");

const missionDayNumber =
    document.getElementById("mission-day-number");

const currentStreak =
    document.getElementById("current-streak");

const streakCopy =
    document.getElementById("streak-copy");

const progressPercent =
    document.getElementById("progress-percent");

const progressFill =
    document.getElementById("progress-fill");

const progressText =
    document.getElementById("progress-text");

const completeButton =
    document.getElementById("complete-button");

const completionMessage =
    document.getElementById("completion-message");

const taskLink =
    document.getElementById("task-link");


function loadState()
{
    const saved =
        localStorage.getItem("abtalks-dashboard-state");

    if(!saved)
    {
        return { ...defaultState };
    }

    try
    {
        const parsed =
            JSON.parse(saved);

        return {
            currentDay:
                Number(parsed.currentDay) ||
                defaultState.currentDay,

            streakDays:
                Number(parsed.streakDays) ||
                defaultState.streakDays
        };
    }
    catch(error)
    {
        return { ...defaultState };
    }
}


function saveState(state)
{
    localStorage.setItem(
        "abtalks-dashboard-state",
        JSON.stringify(state)
    );
}


function getCurrentChallenge(day)
{
    return challenges.find(
        challenge => challenge.day === day
    );
}


function formatStreak(days)
{
    return days === 1
        ? "1 DAY"
        : `${days} DAYS`;
}


function render(state)
{
    const challenge =
        getCurrentChallenge(state.currentDay);

    if(!challenge)
    {
        return;
    }


    const completedDays =
        Math.max(0, state.currentDay - 1);

    const percent =
        Math.min(
            100,
            Math.round(
                (completedDays / totalDays) * 100
            )
        );


    /*
     * Current day
     */

    currentDayNumber.textContent =
        state.currentDay;

    missionDayNumber.textContent =
        state.currentDay;


    /*
     * Current streak
     */

    currentStreak.textContent =
        formatStreak(state.streakDays);


    if(state.currentDay < totalDays)
    {
        streakCopy.textContent =
            `Complete Day ${state.currentDay} to continue your streak.`;
    }
    else
    {
        streakCopy.textContent =
            "You have reached the final day of the challenge!";
    }


    /*
     * Progress
     */

    progressPercent.textContent =
        `${percent}%`;

    progressFill.style.width =
        `${percent}%`;

    progressText.textContent =
        `${completedDays} of ${totalDays} days completed`;


    /*
     * Today's challenge
     */

    const missionTitle =
        document.querySelector(".mission-card h2");

    const missionDescription =
        document.querySelector(".mission-card p:not(.small-text)");

    const missionDetails =
        document.querySelectorAll(".mission-details span");


    if(missionTitle)
    {
        missionTitle.textContent =
            challenge.title;
    }


    if(missionDescription)
    {
        missionDescription.textContent =
            challenge.description;
    }


    if(missionDetails.length >= 2)
    {
        missionDetails[0].textContent =
            `⏱ ${challenge.time}`;

        missionDetails[1].textContent =
            `💻 ${challenge.level}`;
    }


    /*
     * Open the reusable challenge page
     */

    if(taskLink)
    {
        taskLink.href =
            `challenge.html?day=${state.currentDay}`;
    }


    /*
     * Completion message
     */

    if(completionMessage)
    {
        completionMessage.style.display =
            "none";
    }


    /*
     * Final day handling
     */

    if(completeButton)
    {
        if(state.currentDay >= totalDays)
        {
            completeButton.textContent =
                "Challenge Completed";

            completeButton.disabled =
                true;
        }
        else
        {
            completeButton.textContent =
                "Mark Challenge Complete";

            completeButton.disabled =
                false;
        }
    }
}


function completeDay(state)
{
    if(state.currentDay >= totalDays)
    {
        return;
    }


    const completedDay =
        state.currentDay;


    state.currentDay += 1;
    state.streakDays += 1;


    saveState(state);

    render(state);


    completionMessage.textContent =
        `Great job! Day ${completedDay} is complete. Day ${state.currentDay} is now ready.`;


    completionMessage.style.display =
        "block";
}


const state =
    loadState();


render(state);


if(completeButton)
{
    completeButton.addEventListener(
        "click",
        function()
        {
            completeDay(state);
        }
    );
}
