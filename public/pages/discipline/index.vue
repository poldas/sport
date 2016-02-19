<template>
    <div class="panel-heading">
        List of something
    </div>
    <div class="panel-body" v-if="$loadingRouteData">
        Loading data {{ loadingRouteData }}
    </div>
    <div class="panel-body" v-if="messages.length > 0">
        <div v-for="message in messages" class="alert alert-{{ message.type }} alert-dismissible" role="alert">
            {{ message.message }}
        </div>
    </div>

    <div class="panel-body" v-if="lista.length == 0">
        You have nothing!
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                lista: [],
                messages: [],
                loadingRouteData: false
            }
        },
        methods: {
            route: {
//                // Ooh, ooh, are there any new puppies yet?
//                data: function (transition) {
//                    console.log(transition)
//                    console.log(this.$route)
//                    this.fetch(this.$route.params.id, function (data) {
//                        transition.next({dog: data})
//                    })
//                }
            }
        }
    }
</script>