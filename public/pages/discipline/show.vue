<template>
    <div class="col-md-3">
    <div class="panel panel-default panel-flush">
        <div class="panel-heading">
            kolejki !
        </div>
        <div class="panel-body">
            <div class="app-tabs">
                <ul class="nav app-tabs-stacked">
                    <li>
                        <a v-link="{ path: '/' }">
                            <i class="fa fa-btn fa-fw fa-list"></i>&nbsp;kolejka 1</span>
                        </a>
                    </li>
                    <li>
                        <a v-link="{ path: '/' }">
                            <i class="fa fa-btn fa-fw fa-heart"></i>&nbsp;kolejka 2</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
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
            }
        }
    }
</script>