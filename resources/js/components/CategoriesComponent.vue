<template>
    <div class="container" id="app">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Category Component</div>

                    <div class="card-body">
                        <table class="table table-hover table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Posted On</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <category-component
                                    v-for="category in categories"
                                    v-bind="category"
                                    :key="category.id"
                                    @update="update"
                                    @delete="destroy">
                                </category-component>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function Category({ id, name}) {
        this.id = id;
        this.name = name;
    }
    import CategoryComponent from './CategoryComponent.vue';

    export default {
        data() {
            return {
                categories: [],
                working: false
            }
        },
        methods: {
            create() {
                axios.get('/api/categories/create').then(({ data }) => {
                this.categories.push(new Category(data));
                });
            },
            read() {
                axios.get('/api/categories').then(({ data }) => {
                    data.forEach(category => {
                        this.categories.push(new Category(category));
                    });
                });
            },
            update(id) {
                axios.put(`/api/categories/${id}`, { name }).then(() => {
                    this.categories.find(category => category.id === id).name = name;
                });
            },
            destroy(id) {
                axios.delete(`/api/categories/${id}`).then(() => {
                    let index = this.categories.findIndex(category => category.id === id);
                    this.categories.splice(index, 1);
                });
            }
        },

        components: {
            CategoryComponent
        },
        created() {
            this.read();
        }
    }
</script>
