console.log(import.meta.env.MODE)

const isPro = import.meta.env.MODE === 'production'


const microAppRoutesConfig = [
    {
        name: "vite-sub-one",
        entry: isPro ? "/qiankun/sub-one/" : "//localhost:5174",
        // entry: "//localhost:5174",
        container: "#sub-container",
        activeRule: isPro ? '/qiankun/sub1' : '/sub1',
    },
    {
        name: "vite-sub-two",
        entry: isPro ? "/qiankun/sub-two/" : "//localhost:5175",
        container: "#sub-container",
        activeRule: isPro ? '/qiankun/sub2' : "/sub2",
    }
]

export default microAppRoutesConfig