import { sequence} from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';
import type { Handle } from '@sveltejs/kit';

const logger: Handle = async ({ event, resolve }) => {
    // console.log('incoming request', event.request);
    return resolve(event);
}

const authorize:Handle = async ({ event, resolve }) => {
    const user = auth();
    event.locals.user = user;

    return resolve(event);
}

export const handle = sequence(logger, authorize);

// Intercept fetch
// export function handleFetch({ request, fetch }) ...

// Intercept error
// export function handleError({ error, event }) ...

