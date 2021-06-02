const formatter = new Intl.RelativeTimeFormat(undefined, {
    localeMatcher: "best fit",
    numeric: 'auto',
    style: "long"
})

const DIVISIONS = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' }
]

function formatTimeAgo(date) {
    let duration = (date - new Date()) / 1000

    for (let i = 0; i <= DIVISIONS.length; i++) {
        const division = DIVISIONS[i]
        if (Math.abs(duration) < division.amount) {
            return formatter.format(Math.round(duration), division.name)
        }
        duration /= division.amount
    }
}

$(function() {
    {
        $('[id^=ago]').each((i, v) => $(v).text(formatTimeAgo((new Date($(v).text())))));
    };
});
