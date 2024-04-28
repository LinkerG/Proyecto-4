export function getTimeInMilliseconds(timeString: string): number {
    const [minutes, seconds, milliseconds] = timeString.split(':').map(Number);
    return minutes * 60000 + seconds * 1000 + milliseconds;
}