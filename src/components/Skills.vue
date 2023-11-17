<template>
    <section>
        <div class="row header">
            <h1>TOOLS</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="column">
                    <div class="skill"><img src="/assets/ts-logo-256.png" width="37" /> Typescript</div>
                    <div class="skill"><i class="fab fa-2x fa-vuejs"></i> VueJS</div>
                    <div class="skill"><i class="fab fa-2x fa-react"></i> React</div>
                </div>
                <div class="column">
                    <div class="skill"><i class="fab fa-2x fa-js"></i> JavaScript</div>
                    <div class="skill"><i class="fa fa-2x fa-html5"></i> HTML5</div>
                    <div class="skill"><i class="fab fa-2x fa-css3-alt"></i> CSS3</div>
                </div>
                <div class="column">
                    <!-- <div class="skill"><i class="fas fa-2x fa-database"></i> MySQL</div> -->
                    <div class="skill"><i class="fab fa-2x fa-figma"></i> Figma</div>
                    <div class="skill"><i class="fab fa-2x fa-github"></i> GitHub</div>
                    <div class="skill"><img src="/assets/d3.png" width="37" /> D3.js</div>
                </div>
                <div class="column">
                    <div class="skill"><i class="fi adobe-indesign"></i> InDesign</div>
                    <div class="skill"><i class="fi adobe-photoshop"></i> Photoshop</div>
                    <div class="skill"><i class="fi adobe-illustrator"></i> Illustrator</div>
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
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.8);

    .container {
        height: 100%;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 70px 50px;

        .row {
            width: 100vw;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            justify-content: space-evenly;
            column-gap: 20px;

            .column {
                .skill {
                    display: -webkit-box;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    font-size: 1.25em;

                    i,
                    img {
                        margin-right: 15px;
                    }
                }
            }
        }
    }
}

@media only all and (max-width : 768px) {
    section {
        .container {
            .row {
                .column {
                    width: 145px;
                }
            }
        }
    }

    h1 {
        .name {
            font-size: 44px;
        }
    }

    h2 {
        font-size: 20px;
        line-height: 22px;
    }

    p {
        font-size: 1em;
    }
}
</style>
