<template>
    <div>
        <template v-for="(item) in list">
            <template v-if="item.children">
                <el-submenu index="item.index" :key="item.index">
                    <i class="el-icon-location"></i>
                    <span>{{item.text}}</span>
                    <el-menu-item-group>
                        <navList :list="item.children"></navList>
                    </el-menu-item-group>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item index="item.index" :key="item.index">{{item.text}}</el-menu-item>
            </template>
        </template>
    </div>
</template>
<script>
export default {
    name: "navList",
    data() {
        return {};
    },
    props: {
        list:{
            type: Array,
            default() {
                return [];
            },
            required: true
        }
    }
}
</script>