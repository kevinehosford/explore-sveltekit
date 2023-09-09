import { error, redirect } from '@sveltejs/kit';

export async function load(props) {
    const { fetch, params, locals } = props;

    if (!locals?.user?.id) {
        throw redirect(307, '/');
    }

    const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
    const data = await res.json();

    if (data.message) {
        throw error(404, { message: data.message })
    }

    return {
        episode: data
    }
}