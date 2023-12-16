<template>
    <div class="container">
        <Search />
        <List />
    </div>
</template>

<script>
// import './assets/css/bootstrap.css'
import Search from './components/Search'
import List from './components/List'
export default {
    name: 'App',
    components: { Search, List }
}
</script>  
