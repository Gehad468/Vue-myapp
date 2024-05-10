<template>
    <div class="main">
        <h5>Welcome to my app</h5>
        <div class="container" style="background-color: rgb(246, 246, 246);" id="mainapp">
            <nav>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="showproducts" :class="{ active: activeTab === 'products' }">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="showWishlist" :class="{ active: activeTab === 'wishlist' }">Wishlist</a>
                    </li>
                </ul>
            </nav>
            
            <div >
                <keep-alive>
                <component :is="targetcomponent" />
                </keep-alive>
            </div>
         
        
        </div>
    </div>
</template>

<script>
import products from "./components/productscomponent.vue";
import wishlist from "./components/wishlistcomponent.vue";

export default {
    data() {
        return {
            activeTab: 'products',
            targetcomponent: 'products'
            
        };
    },
    methods: {
        showproducts() {
            this.activeTab = 'products';
            this.targetcomponent = 'products';
        },
        showWishlist() {
            this.activeTab = 'wishlist';
            this.targetcomponent = 'wishlist';
        }
    },
    components: {
        products,
        wishlist
    }
};
</script>

<style>
</style>
