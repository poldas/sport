<template>
    <!-- Navigation -->
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- Branding Image -->
                <a class="navbar-brand" v-link="{ path: '/' }" style="padding-top: 19px;">
                    <i class="fa fa-btn fa-gear fa-spin"></i> {{ navTitle }}
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a v-link="{ path: '/discipline' }">Dyscypliny</a></li>
                    <li><a v-link="{ path: '/teams' }">Drużyny i piłkarze</a></li>
                </ul>
                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Login / Registration Links for unauthenticated users -->
                    <li v-if=" ! $root.authenticated"><a v-link="{ path: '/' }">Login</a></li>
                    <li v-if=" ! $root.authenticated"><a v-link="{ path: '/' }">Register</a></li>
                    <!-- Authenticated Right Dropdown -->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            user <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <!-- Settings -->
                            <li class="dropdown-header">Settings</li>
                            <li>
                                <a v-link="{ path: '/' }">
                                    <i class="fa fa-btn fa-fw fa-user"></i>Your profile
                                </a>
                            </li>

                            <!-- Logout -->
                            <li class="divider"></li>
                            <li>
                                <a v-link="{ path: '/' }">
                                    <i class="fa fa-btn fa-fw fa-sign-out"></i>Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav></template>

<script>
    module.exports = {
        data: function () {
            return {
                navTitle: 'Panel Budżet'
            }
        }

    }
</script>

