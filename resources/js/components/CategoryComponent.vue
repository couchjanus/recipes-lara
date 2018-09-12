<template>
    <tr>
        <td>{{ name | properCase }}</td>
        <td>{{ created_at }}</td>
        <td>
            <button title="Edit category" type="button" class="btn btn-info"><span data-feather="edit"></span></button>
            <button title="Delete category" type="button" class="btn btn-danger"><span data-feather="delete"></span></button>
        </td>
    </tr>
</template>

<script>
    export default {
        methods: {
            update() {
                this.$emit('update', this.id);
            },
            destroy() {
                this.$emit('delete', this.id);
            }
        },
        props: ['id', 'name'],
        filters: {
            properCase(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    }
</script>
