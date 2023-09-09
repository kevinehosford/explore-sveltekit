import { error } from '@sveltejs/kit';

export async function load(props) {
    const { fetch, params} = props;

    const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
    const data = await res.json();

    if (data.message) {
        throw error(404, { message: data.message })
    }

    return {
        episode: data
    }
}