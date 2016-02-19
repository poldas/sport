<template>
    <div class="container app-screen">
        <!-- Tabs -->
        <!--<div class="col-md-2">-->
            <!--<div class="panel panel-default panel-flush">-->
                <!--<div class="panel-heading">-->
                    <!--Stona glówna!-->
                <!--</div>-->
                <!--<div class="panel-body">-->
                    <!--<div class="app-tabs">-->
                        <!--<ul class="nav app-tabs-stacked">-->
                            <!--<li>-->
                                <!--<a v-link="{ path: '/discipline' }">-->
                                    <!--<i class="fa fa-btn fa-fw fa-list"></i>&nbsp;Dyscypliny</span>-->
                                <!--</a>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<a v-link="{ path: '/' }">-->
                                    <!--<i class="fa fa-btn fa-fw fa-heart"></i>&nbsp;główna</span>-->
                                <!--</a>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!-- Tab Panes -->
        <div class="col-md-12">
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="panel panel-default">
                        <router-view></router-view>
                    </div>
                </div><!-- End tab panel -->
            </div><!-- End tab content -->
        </div><!-- End tab panes col-md-9 -->
    </div><!-- End container -->
</template>


<script>
export default {
    data () {
        return {
            hi: 'Hello home :)'
        }
    },
    methods: {

    }
}
</script>