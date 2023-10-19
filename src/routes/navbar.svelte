<script>
    import Icon from '@iconify/svelte';
    import { goto } from '$app/navigation';

    function home () {
        goto('/');
    }
    function menu () {
        goto('/menu');
    }
    function cart () {
        goto('/cart');
    }


</script>

<div class="flex justify-content-center justify-center">
    <div class="w-[180px] h-[50px] flex justify-content-center justify-center bg-white mt-[20px] rounded-xl">
        <button class=" w-[50px] h-[35px] mt-[6px] flex justify-content-center justify-center" title="home" on:click={home}><Icon icon="material-symbols:home" width="50" height="40" class="rounded-full bg-white animate-Fadeout hover:animate-Fadein"/></button>
        <button class=" w-[50px] h-[35px] mt-[6px] flex justify-content-center justify-center" title="menu" on:click={menu}><Icon icon="material-symbols:book" width="50" height="40" class="rounded-full bg-white animate-Fadeout hover:animate-Fadein"/></button>
        <button class=" bg-white w-[50px] h-[35px] mt-[6px] flex justify-content-center justify-center rounded-full" title="cart" on:click={cart}><Icon icon="material-symbols:shopping-cart" width="50" height="40" class="rounded-full bg-white animate-Fadeout hover:animate-Fadein" /></button>
    </div>
</div>

<style lang="postcss">

</style>