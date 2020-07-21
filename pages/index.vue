<template>
    <div class="flex flex-col md:flex-row">
        <div
            class="side-bar h-auto mt-4 md:mt-0  md:w-1/4 md:h-screen  flex flex-row md:flex-col justify-center content-center font-sans border-r border-solid border-gray-100 relative"
        >
            <div class="md:fixed md:w-1/4">
                <div class="avatar rounded-full w-32 h-32 mx-auto bg-gray-300 mb-4 z-10" />

                <h1 class="text-center text-2xl font-medium text-gray-600 z-10">Chungphing LY</h1>
                <div class="separator flex flex-row content-center justify-center my-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-unlink"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00BCD4"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                        <line x1="16" y1="21" x2="16" y2="19" />
                        <line x1="19" y1="16" x2="21" y2="16" />
                        <line x1="3" y1="8" x2="5" y2="8" />
                        <line x1="8" y1="3" x2="8" y2="5" />
                    </svg>
                </div>
                <div class="social-strip flex flex-row content-center justify-center my-2 z-10">
                    <div class="mx-2 rounded-sm w-8 h-8 bg-blue-400"></div>
                    <div class="mx-2 rounded-sm w-8 h-8 bg-blue-400"></div>
                    <div class="mx-2 rounded-sm w-8 h-8 bg-blue-400"></div>
                </div>
            </div>
        </div>
        <div class="flex-1 flex flex-col content-center m-8">
            <section class="mb-4 skills">
                <div
                    class="rounded-md bg-gray-200 w-full h-16 flex flex-row content-center px-4 mb-4 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00BCD4"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                    <h1 class="text-xl mx-2 font-medium text-gray-800">What do I do?</h1>
                </div>
                <span class="portfolio-header flex flex-row pt-2 pb-4 border-b-2 border-solid border-gray">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-browser"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#009688"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="4" y="4" width="16" height="16" rx="1" />
                        <line x1="4" y1="8" x2="20" y2="8" />
                        <line x1="8" y1="4" x2="8" y2="8" />
                    </svg>
                    <h1
                        class="font-medium text-lg text-gray-800 mx-2"
                    >Landing Page / Portfolio websites</h1>
                </span>
                <p
                    class="paragraph my-4 text-lg text-gray-800 leading-relaxed"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores voluptatum, corporis beatae commodi. Inventore, voluptate ipsa.</p>
                <span class="business-header flex flex-row pt-2 pb-4 border-b-2 border-solid">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-briefcase"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2196F3"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <line x1="12" y1="12" x2="12" y2="12.01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                    <h1 class="font-medium text-lg text-gray-800 mx-2">Business system</h1>
                </span>
                <p
                    class="paragraph my-4 text-lg text-gray-800 leading-relaxed"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores voluptatum, corporis beatae commodi. Inventore, voluptate ipsa.</p>
                <span class="mobile-header flex flex-row pt-2 pb-4 border-b-2 border-solid border-gray">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-device-mobile"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#9C27B0"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="7" y="4" width="10" height="16" rx="1" />
                        <line x1="11" y1="5" x2="13" y2="5" />
                        <line x1="12" y1="17" x2="12" y2="17.01" />
                    </svg>
                    <h1 class="font-medium text-lg text-gray-800 mx-2">Mobile App</h1>
                </span>
                <p
                    class="paragraph my-4 text-lg text-gray-800 leading-relaxed"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugiat minima voluptatem ad quos iusto omnis qui aperiam saepe animi autem excepturi dolores voluptatum, corporis beatae commodi. Inventore, voluptate ipsa.</p>
            </section>
            <section class="mb-4 portfolio">
                <div
                    class="rounded-md bg-gray-200 w-full h-16 flex flex-row content-center px-4 mb-4 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00BCD4"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                    <h1 class="text-xl mx-2 font-medium text-gray-800">Portfolio</h1>
                </div>
                <div class="showcases flex flex-col md:flex-row flex-wrap">
                    <div class="showcase-item h-64 w-full md:w-1/4 p-4">
                        <div class="w-full h-full rounded-sm bg-gray-200"></div>
                    </div>
                    <div class="showcase-item h-64 w-full md:w-1/4 p-4">
                        <div class="w-full h-full rounded-sm bg-gray-200"></div>
                    </div>
                    <div class="showcase-item h-64 w-full md:w-1/4 p-4">
                        <div class="w-full h-full rounded-sm bg-gray-200"></div>
                    </div>
                    <div class="showcase-item h-64 w-full md:w-1/4 p-4">
                        <div class="w-full h-full rounded-sm bg-gray-200"></div>
                    </div>
                    <div class="showcase-item h-64 w-full md:w-1/4 p-4">
                        <div class="w-full h-full rounded-sm bg-gray-200"></div>
                    </div>
                </div>
            </section>
            <section class="mb-4 contact">
                <div
                    class="rounded-md bg-gray-200 w-full h-16 flex flex-row content-center px-4 mb-4 items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#00BCD4"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                    <h1 class="text-xl mx-2 font-medium text-gray-800">Inqury</h1>
                </div>
                <div class="inquire">
                    <input
                        class="w-full px-8 py-4 bg-gray-200 rounded-full"
                        type="email"
                        placeholder="your email"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@515&display=swap');

.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

* {
  font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
.showcases {
    margin: -1rem;
}
.avatar {
  background-image: url("~assets/img/profile.jpeg");
  background-position: center;
  background-size: contain;
}
.portfolio-header:hover {
  border-color: #009688;
}

.business-header:hover {
  border-color: #2196F3
}
.mobile-header:hover {
  border-color: #9C27B0
}
</style>
