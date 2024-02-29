export function getDayById(id) {
    return daysForInterviews.find((day) => day.id === id)
}

export const daysForInterviews = [
    {
        id: 1,
        name: 'Monday',
    },
    {
        id: 2,
        name: 'Tuesday',
    },
    {
        id: 4,
        name: 'Wednesday',
    },
]
