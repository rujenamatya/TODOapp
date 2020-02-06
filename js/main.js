let app = new Vue({
    el: "#vueApp",
    data: {
        //welcomeMessage: 'TODO Items',
        title: 'Simple TODO List',
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
                this.saveItems()
            }
        },
        removesItem:function(val){
            var index = this.lists.indexOf(val)
            this.lists.splice(index, 1)
            this.saveItems()
        },
        saveItems:function(){
            const parsed = JSON.stringify(this.lists);
            localStorage.setItem('lists', parsed);
        }

        
    },
    mounted() {
        if (localStorage.getItem('lists')) {
            try {
              this.lists = JSON.parse(localStorage.getItem('lists'));
            } catch(e) {
              localStorage.removeItem('lists');
            }
          }
    },
});
