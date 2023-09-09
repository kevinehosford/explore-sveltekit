<script>
    import '../app.css';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
	import Episodes from './Episodes.svelte';

    export let data;

    $: ({ all_episodes} = data)
</script>

<Header />

<main>
    <div class="main">
        <slot />
    </div>
    <aside>
        <Episodes episodes={all_episodes} />
    </aside>
</main>

<Footer />

<style>
    main {
        display: grid;
        grid-template-columns: 300px 1fr;
    }

    aside {
        order: -1;
    }
</style>
