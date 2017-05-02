const MILLISECONDS = 1000;
const getUnixTimestamp = ts => Date.parse(ts) / MILLISECONDS;
const getNaturalTimestamp = ts => new Date(ts * MILLISECONDS).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

module.exports = { getUnixTimestamp, getNaturalTimestamp };