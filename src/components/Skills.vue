<template>
    <section>
        <div class="row header">
            <h2>TOOLS</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="column">
                    <h6 class="skill"><img class="mr-l" src="/assets/ts-logo-256.png" width="37" /> Typescript</h6>
                    <h6 class="skill"><i class="fab fa-2x fa-vuejs mr-l"></i> VueJS</h6>
                    <h6 class="skill"><i class="fab fa-2x fa-react mr-l"></i> React</h6>
                </div>
                <div class="column">
                    <h6 class="skill"><i class="fab fa-2x fa-js mr-l"></i> JavaScript</h6>
                    <h6 class="skill"><i class="fa fa-2x fa-html5 mr-l"></i> HTML5</h6>
                    <h6 class="skill"><i class="fab fa-2x fa-css3-alt mr-l"></i> CSS3</h6>
                </div>
                <div class="column">
                    <!-- <h6 class="skill"><i class="fas fa-2x fa-database mr-l"></i> MySQL</h6> -->
                    <h6 class="skill"><i class="fab fa-2x fa-figma mr-l"></i> Figma</h6>
                    <h6 class="skill"><i class="fab fa-2x fa-github mr-l"></i> GitHub</h6>
                    <h6 class="skill"><img class="mr-l" src="/assets/d3.png" width="37" /> D3.js</h6>
                </div>
                <div class="column">
                    <h6 class="skill"><i class="fi adobe-indesign mr-l"></i> InDesign</h6>
                    <h6 class="skill"><i class="fi adobe-photoshop mr-l"></i> Photoshop</h6>
                    <h6 class="skill"><i class="fi adobe-illustrator mr-l"></i> Illustrator</h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills'
}
</script>

<style scoped lang="scss">
section {
    height: clamp(100px, 50vh, 100%);
    background-color: var(--color-grey);
    color: var(--text-body);

    .container {
        height: 100%;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
        padding-bottom: 80px;

        .row {
            width: 100vw;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            justify-content: space-evenly;
            column-gap: 16px;

            .column {
                .skill {
                    display: -webkit-box;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    align-items: center;
                    margin-top: 30px;
                    margin-bottom: 0;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>
