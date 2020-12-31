<template>
    <div id="about">
        <div class="container">
            <div class="row header fade-in">
                <h1>ABOUT</h1>
            </div>
            <div class="row" id="values">
                <div class="column">
                    <span id="responsive">RESPONSIVE</span>
                    <span id="layouts">LAYOUTS</span>
                </div>
                <div class="column">
                    <span id="intuitive">INTUITIVE</span>
                    <span id="ui">UI/UX</span>
                </div>
                <div class="column">
                   <span id="organized">ORGANIZED</span>
                   <span id="architecture">ARCHITECTURE</span> 
                </div>
            </div>
            <div class="row">
                <p>
                    I'm passionate about intuitive UI/UX and creating highly responsive and performant apps. From mock ups to architecture I like organized and consistant structure that won't make a user second guess what to do next. I find there are always ways to speed things up and do regular refactors as I learn and grow.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    created () {
        let fadeInElements = document.getElementsByClassName('fade-in')
        console.log(fadeInElements)
    }
}

</script>
