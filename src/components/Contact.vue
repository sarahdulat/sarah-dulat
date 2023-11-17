<template>
    <section>
        <div class="row header">
            <h2 class="mt-0">CONTACT</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="column">
                    <div class="photo bg-primary">
                        <img src="/assets/ProfilePic.jpg" alt="Photo of Sarah Dulat" />
                    </div>
                </div>
                <div class="column">
                    <h5 class="c-primary m-0">Thanks for stopping by.</h5>
                    <p>I am currently open to exploring new opportunities and expanding my professional horizons. Whether
                        it's full-time employment, freelance projects, or contract work, I am eager to contribute my skills
                        and expertise to innovative and impactful ventures. If you have exciting projects, job
                        opportunities, or freelance collaborations that align with my skill set, I would be delighted to
                        connect and discuss how I can contribute to the success of your team or project.</p>
                    <p>
                        Keep in <a href="mailto: hello@sarahdulat.com" target="_blank">touch</a>, find me on <a
                            href="https://www.linkedin.com/in/sarahdulat/" target="_blank">LinkedIn</a> or take a look at my
                        <a href="/assets/SarahDulat-Resume.pdf" target="_blank">resume<i
                                class="fas fa-file-pdf ml-s c-primary"></i></a>.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped lang="scss">
section {
    height: clamp(25vh, 50vh, 100%);
    color: var(--text-body);
    background-color: var(--color-white);

    .container {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 70px;
        padding-top: 70px;

        .row {
            width: 100vw;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;

            div.photo {
                position: relative;
                margin: 0 20px 30px 0;
                width: 200px;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
                border: 5px solid var(--color-primary-light);
                overflow: hidden;

                img {
                    position: absolute;
                    top: -1%;
                    left: -10%;
                    height: 120%;
                    width: auto;
                }
            }
        }
    }

    p {
        max-width: 70ch;
        word-break: break-word;

        a {
            font-weight: 600;
            color: var(--text-body);
        }

        a:hover {
            color: var(--color-primary-light);
        }
    }
}

@media only all and (max-width : 768px) {
    section {
        .row {
            flex-wrap: wrap !important;
            text-align: center;
        }
    }
}
</style>
