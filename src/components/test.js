import { defineComponent, h, ref, unref, computed } from "vue";
//除以下写法之外也可以定义组件defineComponent
const MainTable = (props, {
    slots
}) => {
    console.log("xxx MainTable");
    console.log(props)
    const a = props.a.value;
    return h("h2",{
        class: a ? "xxx" : "yyy"
    },[
       a ? h("div", null, "hello") : h("div", null, "hi")
    ]
    
    )
}
const createTable = ()  => {
    return defineComponent({
        name: "custom-table",
        emits: ["itemRendered"],
        setup(props, { emit, expose, slots }) {
            const renderWindow = () => {
                return h("button",{
                    innerHTML: "renderWindow",
                    onClick: () => emit("itemRendered")
                })
            }
            //renderWindow会立刻执行
            return renderWindow
        }
    })
}
const MyTable = defineComponent({
    name: "my-table",
    props: {
        data: Object,
        num: Object,
    },
    setup(props, {
        slots,
        expose
    }) {
        return () => {
            const a = ref(true);
            setTimeout(() => {
                console.log("!!!!")
                a.value = false
            }, 1000)
            console.log("MyTable")
            const {
                data,
                num
            } = props;
            const mainProps = {
                data,
                num,
                a
            }
            
            return h("h1", {
                    style: {color: '#ccc'},
                    onClick: () => {console.log(1)},
                },[
                    h(MainTable, mainProps),
                    h(createTable(), {
                        class: 'a',
                        onItemRendered: () => {console.log(2)}
                    }, slots),
                ],
            )
        }
    }
})


export { MyTable };
