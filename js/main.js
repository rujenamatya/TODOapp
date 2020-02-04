let app = new Vue({
    el: "#vueApp",
    data: {
        //welcomeMessage: 'TODO Items',
        title: 'Simple TODO list',
        lists: [
            {id:1, item:'complete assignment'},
            {id:2, item:'submit homework'},
            {id:3, item:'play game'}
        ],
        newItem: '',
    },
    methods: {
        addItem:function(){
            let id = this.lists.length + 1
            if (this.newItem !== ''){
                const newList = {id:id, item:this.newItem}
                this.lists.push(newList)
                this.newItem = ''
            }
        },
        removeItem:function(){
            
        }

    },
    mounted() {

    },
});
