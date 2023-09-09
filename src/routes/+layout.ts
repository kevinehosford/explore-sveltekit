export async function load({ fetch }) {
    const allData = await fetch('https://syntax.fm/api/shows');
    const allEpisodes = await allData.json();

    return {
        all_episodes: allEpisodes
    };
}