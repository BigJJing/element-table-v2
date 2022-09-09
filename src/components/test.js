import { defineComponent, h } from "vue";
//除以下写法之外也可以定义组件defineComponent
const MainTable = (props, {
    slots
}) => {
    return h("h2",{},
        {
            default: slots.header
        }
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
    props: {},
    setup(props, {
        slots,
        expose
    }) {
        return () => {
            return h("h1", {
                    style: {color: '#ccc'},
                    onClick: () => {console.log(1)},
                },[
                    h(MainTable, {class: 'c'}, slots),
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
