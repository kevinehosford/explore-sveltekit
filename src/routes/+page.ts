export async function load({ fetch, setHeaders }) {
    const res = await fetch('https://syntax.fm/api/shows/latest');
    const data = await res.json();

    setHeaders({
        'Cache-Control': 'max-age=60'
    });

    return {
        latest_episode: data, 
    };
}